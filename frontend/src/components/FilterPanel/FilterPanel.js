import React from 'react';

const riskLevels = ['low', 'medium', 'high'];
const categories = ['savings', 'investment', 'insurance', 'crypto'];
const liquidityOptions = ['easy', 'moderate', 'locked'];
const timeHorizons = ['short', 'medium', 'long'];

function FilterPanel({ filters, onFilterChange, productCount }) {
  // Handlers for each filter
  const handleRiskChange = (e) => {
    const { value, checked } = e.target;
    let newRisk = [...filters.risk];
    if (checked) {
      newRisk.push(value);
    } else {
      newRisk = newRisk.filter(r => r !== value);
    }
    onFilterChange({ risk: newRisk });
  };
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    let newCat = [...filters.category];
    if (checked) {
      newCat.push(value);
    } else {
      newCat = newCat.filter(c => c !== value);
    }
    onFilterChange({ category: newCat });
  };
  const handleLiquidityChange = (e) => {
    onFilterChange({ liquidity: e.target.value });
  };
  const handleTimeHorizonChange = (e) => {
    onFilterChange({ timeHorizon: e.target.value });
  };
  const handleReturnRangeChange = (e) => {
    const { name, value } = e.target;
    let range = [...filters.returnRange];
    if (name === 'minReturn') range[0] = Number(value);
    if (name === 'maxReturn') range[1] = Number(value);
    onFilterChange({ returnRange: range });
  };
  const handleMinInvestmentChange = (e) => {
    onFilterChange({ minInvestment: e.target.value });
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>Risk Level:</label>
        <div className="filter-checkboxes">
          {riskLevels.map(risk => (
            <label key={risk}>
              <input
                type="checkbox"
                value={risk}
                checked={filters.risk.includes(risk)}
                onChange={handleRiskChange}
              />
              {risk}
            </label>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <label>Return Range (%):</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <input
            type="number"
            name="minReturn"
            min="0"
            max="30"
            value={filters.returnRange[0]}
            onChange={handleReturnRangeChange}
          />
          <span style={{ margin: '0 4px' }}>-</span>
          <input
            type="number"
            name="maxReturn"
            min="0"
            max="30"
            value={filters.returnRange[1]}
            onChange={handleReturnRangeChange}
          />
        </div>
      </div>
      <div className="filter-group">
        <label>Category:</label>
        <div className="filter-checkboxes">
          {categories.map(cat => (
            <label key={cat}>
              <input
                type="checkbox"
                value={cat}
                checked={filters.category.includes(cat)}
                onChange={handleCategoryChange}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <label>Liquidity:</label>
        <select value={filters.liquidity} onChange={handleLiquidityChange}>
          <option value="all">All</option>
          {liquidityOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Time Horizon:</label>
        <select value={filters.timeHorizon} onChange={handleTimeHorizonChange}>
          <option value="all">All</option>
          {timeHorizons.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Max Min. Investment (PKR):</label>
        <input
          type="number"
          min="0"
          value={filters.minInvestment}
          onChange={handleMinInvestmentChange}
        />
      </div>
      <div className="filter-group">
        <strong>{productCount} products found</strong>
      </div>
    </div>
  );
}

export default FilterPanel;
