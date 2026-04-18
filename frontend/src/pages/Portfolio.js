import React, { useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';
import PortfolioSummary from '../components/PortfolioSummary/PortfolioSummary';
import PortfolioItem from '../components/PortfolioItem/PortfolioItem';

function Portfolio() {
  const { portfolio, removeFromPortfolio, updateAllocation } = useContext(PortfolioContext);
  const highRiskPercent = portfolio.riskDistribution.high || 0;
  return (
    <div>
      <h1>Portfolio</h1>
      <PortfolioSummary portfolio={portfolio} />
      <div style={{ margin: '1em 0', fontWeight: 500, color: '#007bff' }}>
        Diversification Score: <span style={{ fontWeight: 700 }}>{portfolio.diversificationScore ?? 'N/A'}</span> / 1.0
        <span style={{ fontSize: 13, color: '#555', marginLeft: 8 }}>(higher is better)</span>
      </div>
      {highRiskPercent > 70 && (
        <div style={{ color: '#b70000', fontWeight: 'bold', margin: '1em 0' }}>
          Warning: More than 70% of your portfolio is in high-risk products!
        </div>
      )}
      <div>
        {portfolio.items.length === 0 ? (
          <div>Your portfolio is empty.</div>
        ) : (
          portfolio.items.map(item => (
            <PortfolioItem
              key={item.product.id}
              item={item}
              onRemove={() => removeFromPortfolio(item.product.id)}
              onUpdateAmount={amt => updateAllocation(item.product.id, amt)}
            />
          ))
        )}
      </div>
      <div style={{ marginTop: '2em' }}>
        <h3>Risk Distribution</h3>
        <div style={{ display: 'flex', gap: '1em' }}>
          <div style={{ background: '#e6ffe6', padding: '0.5em', borderRadius: 6 }}>Low: {portfolio.riskDistribution.low?.toFixed(1)}%</div>
          <div style={{ background: '#fffbe0', padding: '0.5em', borderRadius: 6 }}>Medium: {portfolio.riskDistribution.medium?.toFixed(1)}%</div>
          <div style={{ background: '#ffeaea', padding: '0.5em', borderRadius: 6 }}>High: {portfolio.riskDistribution.high?.toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
