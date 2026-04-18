import React, { createContext, useState, useEffect } from 'react';

export const UserProfileContext = createContext();

export function UserProfileProvider({ children }) {
  // Default profile structure
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile');
    return saved
      ? JSON.parse(saved)
      : {
          riskTolerance: '',
          investmentHorizon: '',
          monthlyCapacity: 0,
          liquidityPreference: '',
          investmentGoal: ''
        };
  });

  // Update profile
  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  // Validate if profile is complete
  const isProfileComplete = () => {
    return (
      profile.riskTolerance &&
      profile.investmentHorizon &&
      profile.monthlyCapacity >= 1000 &&
      profile.liquidityPreference &&
      profile.investmentGoal
    );
  };

  // Recommendation engine logic
  const getRecommendations = (products) => {
    if (!isProfileComplete()) return [];
    // Step 1: Filter by risk tolerance
    const riskMapping = {
      conservative: ['low'],
      moderate: ['low', 'medium'],
      aggressive: ['low', 'medium', 'high']
    };
    const allowedRisk = riskMapping[profile.riskTolerance] || ['low'];

    // Step 2: Filter by investment horizon
    const horizonMapping = {
      short: ['short'],
      medium: ['short', 'medium'],
      long: ['short', 'medium', 'long']
    };
    const allowedHorizon = horizonMapping[profile.investmentHorizon] || ['short'];

    // Step 3: Filter by liquidity preference
    const liquidityMapping = {
      easy: ['easy'],
      moderate: ['easy', 'moderate'],
      locked: ['easy', 'moderate', 'locked']
    };
    const allowedLiquidity = liquidityMapping[profile.liquidityPreference] || ['easy'];

    // Step 4: Filter by budget
    const affordableProducts = products.filter(
      (p) => p.minInvestment <= profile.monthlyCapacity
    );

    // Step 5: Apply all filters
    let recommended = affordableProducts.filter(
      (p) =>
        allowedRisk.includes(p.riskLevel) &&
        allowedHorizon.includes(p.timeHorizon) &&
        allowedLiquidity.includes(p.liquidity)
    );

    // Step 6: Sort by relevance
    if (profile.riskTolerance === 'conservative') {
      recommended = recommended.sort((a, b) => a.riskLevel.localeCompare(b.riskLevel));
    } else {
      recommended = recommended.sort((a, b) => b.expectedReturn - a.expectedReturn);
    }
    return recommended;
  };

  return (
    <UserProfileContext.Provider value={{
      profile, updateProfile, getRecommendations, isProfileComplete
    }}>
      {children}
    </UserProfileContext.Provider>
  );
}
