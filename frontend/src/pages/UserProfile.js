import React, { useContext, useState } from 'react';
import { UserProfileContext } from '../contexts/UserProfileContext';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import { fetchProducts } from '../utils/api';
import { transformToFinancialProduct } from '../utils/transform';

function UserProfile() {
  const { profile, updateProfile, isProfileComplete, getRecommendations } = useContext(UserProfileContext);
  const [editMode, setEditMode] = useState(!isProfileComplete());
  const [form, setForm] = useState(profile);
  const [validation, setValidation] = useState({});
  const [recommendCount, setRecommendCount] = useState(0);

  // Validate form fields
  const validate = (f) => {
    const v = {};
    if (!f.riskTolerance) v.riskTolerance = 'Required';
    if (!f.investmentHorizon) v.investmentHorizon = 'Required';
    if (!f.monthlyCapacity || f.monthlyCapacity < 1000) v.monthlyCapacity = 'Min 1000';
    if (!f.liquidityPreference) v.liquidityPreference = 'Required';
    if (!f.investmentGoal) v.investmentGoal = 'Required';
    return v;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    setValidation(v);
    if (Object.keys(v).length === 0) {
      updateProfile(form);
      setEditMode(false);
      // Preview recommendations
      const apiProducts = await fetchProducts();
      const products = apiProducts.map(transformToFinancialProduct);
      setRecommendCount(getRecommendations(products).length);
    }
  };

  // On mount, preview recommendations if profile is complete
  React.useEffect(() => {
    if (isProfileComplete()) {
      fetchProducts().then(apiProducts => {
        const products = apiProducts.map(transformToFinancialProduct);
        setRecommendCount(getRecommendations(products).length);
      });
    }
  }, []);

  return (
    <div>
      <h1>User Financial Profile</h1>
      <div className="profile-page-container">
        {editMode ? (
          <ProfileForm profile={form} onSubmit={handleSubmit} onChange={handleChange} validation={validation} />
        ) : (
          <div className="profile-summary-box">
            <h3>Profile Summary</h3>
            <div>Risk Tolerance: <strong>{profile.riskTolerance}</strong></div>
            <div>Investment Horizon: <strong>{profile.investmentHorizon}</strong></div>
            <div>Monthly Capacity: <strong>PKR {profile.monthlyCapacity}</strong></div>
            <div>Liquidity Preference: <strong>{profile.liquidityPreference}</strong></div>
            <div>Investment Goal: <strong>{profile.investmentGoal}</strong></div>
            <button onClick={() => { setEditMode(true); setForm(profile); }}>Edit Profile</button>
          </div>
        )}
        <div style={{ margin: '1em 0', minWidth: 220 }}>
          <strong>Recommendation Preview:</strong> {recommendCount} products match your profile.
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
