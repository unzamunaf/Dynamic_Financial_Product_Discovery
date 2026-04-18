import React, { useState } from 'react';
import RiskBadge from '../RiskBadge/RiskBadge';
import ReturnDisplay from '../ReturnDisplay/ReturnDisplay';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToPortfolio, isInPortfolio, compare = [], onCompareToggle, onCalcProduct }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    if (!isInPortfolio) {
      onAddToPortfolio(product, product.minInvestment);
      setAdded(true);
      setTimeout(() => setAdded(false), 1200);
    }
  };
  return (
    <div className="product-card" tabIndex={0} aria-label={`Product card for ${product.name}`}> 
      <div className="details-overlay">
        <h2>{product.name}</h2>
        <span className={`category-badge category-${product.category}`}>{product.category}</span>
        <div>
          <ReturnDisplay value={product.expectedReturn} />
          <RiskBadge riskLevel={product.riskLevel} size="md" />
        </div>
        <div>Liquidity: <span>{product.liquidity}</span></div>
        <div>Min Investment: <span>PKR {product.minInvestment}</span></div>
        <div>Time Horizon: <span>{product.timeHorizon}</span></div>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="view-details-btn" aria-label={`View details for ${product.name}`}>View Details</Link>
          <button
            className={`add-portfolio-btn${isInPortfolio || added ? ' added' : ''}`}
            onClick={handleAdd}
            disabled={isInPortfolio}
            aria-label={isInPortfolio ? `Already in portfolio: ${product.name}` : `Add ${product.name} to portfolio`}
          >
            {isInPortfolio || added ? 'Added ✓' : 'Add to Portfolio'}
          </button>
          {onCompareToggle && (
            <label style={{ marginLeft: 8, fontSize: 13 }}>
              <input
                type="checkbox"
                checked={compare.includes(product.id)}
                onChange={() => onCompareToggle(product.id)}
                disabled={compare.length >= 3 && !compare.includes(product.id)}
                style={{ marginRight: 4 }}
                aria-label={compare.includes(product.id) ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
              />
              Compare
            </label>
          )}
          {onCalcProduct && (
            <button
              style={{ marginLeft: 8, fontSize: 13, background: '#28a745', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3em 0.7em' }}
              onClick={() => onCalcProduct(product)}
              aria-label={`Open return calculator for ${product.name}`}
            >
              Calculate Return
            </button>
          )}
        </div>
      </div>
      <img src={product.image} alt={product.name} className="product-image" style={{ width: '100%', borderRadius: 8 }} />
    </div>
  );
}

export default ProductCard;
