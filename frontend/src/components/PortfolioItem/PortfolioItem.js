import React, { useState } from 'react';

function PortfolioItem({ item, onRemove, onUpdateAmount }) {
  const [amount, setAmount] = useState(item.amount);
  const handleChange = (e) => {
    const val = Number(e.target.value);
    setAmount(val);
    onUpdateAmount(val);
  };
  return (
    <div className="portfolio-item" style={{ border: '1px solid #eee', borderRadius: 8, margin: '0.5em 0', padding: '1em', display: 'flex', alignItems: 'center', gap: '1em' }}>
      <img src={item.product.image} alt={item.product.name} style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover' }} />
      <div style={{ flex: 1 }}>
        <div><strong>{item.product.name}</strong> ({item.product.category})</div>
        <div>Risk: {item.product.riskLevel} | Return: {item.product.expectedReturn}%</div>
        <div>Min Investment: PKR {item.product.minInvestment}</div>
      </div>
      <div>
        <label>Amount: </label>
        <input type="number" min={item.product.minInvestment} value={amount} onChange={handleChange} style={{ width: 100 }} />
      </div>
      <button onClick={onRemove} style={{ background: '#b70000', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5em 1em' }}>Remove</button>
    </div>
  );
}

export default PortfolioItem;
