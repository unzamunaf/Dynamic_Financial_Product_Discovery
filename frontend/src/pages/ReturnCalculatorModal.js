import React, { useState } from 'react';

export default function ReturnCalculatorModal({ product, products, onClose }) {
  const [selected, setSelected] = useState(product ? product.id : (products[0] ? products[0].id : ''));
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const selectedProduct = products.find(p => p.id === selected) || product;

  const handleCalc = () => {
    if (!selectedProduct || !amount || !years) return;
    const principal = Number(amount);
    const rate = selectedProduct.expectedReturn / 100;
    const n = Number(years);
    // Compound interest formula: A = P(1 + r)^n
    const total = principal * Math.pow(1 + rate, n);
    setResult({
      total: total.toFixed(2),
      gain: (total - principal).toFixed(2),
      rate: selectedProduct.expectedReturn,
      years: n
    });
  };

  return (
    <div>
      <h2 id="return-calc-title">Return Calculator</h2>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="calc-product-select">Product:</label>
        <select id="calc-product-select" value={selected} onChange={e => setSelected(e.target.value)} style={{ marginLeft: 8 }} aria-label="Select product for return calculation">
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="calc-amount">Investment Amount (PKR):</label>
        <input id="calc-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} style={{ marginLeft: 8 }} aria-label="Investment Amount" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="calc-years">Years:</label>
        <input id="calc-years" type="number" value={years} onChange={e => setYears(e.target.value)} style={{ marginLeft: 8 }} aria-label="Years" />
      </div>
      <button onClick={handleCalc} style={{ padding: '0.5em 1em', borderRadius: 6, background: '#007bff', color: '#fff', border: 'none' }} aria-label="Calculate projected return">Calculate</button>
      {result && (
        <div style={{ marginTop: 24 }}>
          <div><b>Total after {result.years} years:</b> PKR {result.total}</div>
          <div><b>Gain:</b> PKR {result.gain}</div>
          <div><b>Annual Return Rate:</b> {result.rate}%</div>
        </div>
      )}
    </div>
  );
}