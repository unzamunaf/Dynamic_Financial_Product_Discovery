import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('portfolio');
    return saved
      ? JSON.parse(saved)
      : {
          items: [],
          totalInvested: 0,
          weightedReturn: 0,
          riskDistribution: { low: 0, medium: 0, high: 0 },
          categoryDistribution: {},
          diversificationScore: 0
        };
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  // Helper to recalculate portfolio stats
  const calculatePortfolioStats = (items) => {
    const total = items.reduce((sum, i) => sum + i.amount, 0);
    let weightedReturn = 0;
    const riskDist = { low: 0, medium: 0, high: 0 };
    const categoryDist = {};
    items.forEach(({ product, amount }) => {
      if (total > 0) weightedReturn += (amount / total) * product.expectedReturn;
      riskDist[product.riskLevel] += amount;
      categoryDist[product.category] = (categoryDist[product.category] || 0) + amount;
    });
    // Risk percentages
    Object.keys(riskDist).forEach(k => {
      riskDist[k] = total > 0 ? (riskDist[k] / total) * 100 : 0;
    });
    // Diversification score: number of categories with >0 allocation
    const diversificationScore = Object.keys(categoryDist).length;
    return {
      items,
      totalInvested: total,
      weightedReturn: Number(weightedReturn.toFixed(2)),
      riskDistribution: riskDist,
      categoryDistribution: categoryDist,
      diversificationScore
    };
  };

  // Add product to portfolio
  const addToPortfolio = (product, amount) => {
    let items = [...portfolio.items];
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx > -1) {
      items[idx].amount += amount;
    } else {
      items.push({ product, amount });
    }
    setPortfolio(calculatePortfolioStats(items));
  };

  // Remove product from portfolio
  const removeFromPortfolio = (productId) => {
    const items = portfolio.items.filter(i => i.product.id !== productId);
    setPortfolio(calculatePortfolioStats(items));
  };

  // Update allocation for a product
  const updateAllocation = (productId, newAmount) => {
    const items = portfolio.items.map(i =>
      i.product.id === productId ? { ...i, amount: newAmount } : i
    );
    setPortfolio(calculatePortfolioStats(items));
  };

  return (
    <PortfolioContext.Provider value={{
      portfolio, addToPortfolio, removeFromPortfolio, updateAllocation
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}
