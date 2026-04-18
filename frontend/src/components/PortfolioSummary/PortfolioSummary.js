import React from 'react';

function PortfolioSummary({ portfolio }) {
  return (
    <div className="portfolio-summary" style={{ margin: '1em 0', padding: '1em', border: '1px solid #eee', borderRadius: 8 }}>
      <h3>Portfolio Summary</h3>
      <div>Total Invested: <strong>PKR {portfolio.totalInvested}</strong></div>
      <div>Weighted Expected Return: <strong>{portfolio.weightedReturn}%</strong></div>
      <div>Diversification Score: <strong>{portfolio.diversificationScore ?? 'N/A'} / 1.0</strong></div>
      <div>Category Distribution:</div>
      <ul>
        {Object.entries(portfolio.categoryDistribution).map(([cat, amt]) => (
          <li key={cat}>{cat}: PKR {amt}</li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioSummary;
