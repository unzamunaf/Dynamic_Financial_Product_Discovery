import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ products, onAddToPortfolio, portfolioItems, compare = [], onCompareToggle, onCalcProduct }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToPortfolio={onAddToPortfolio}
          isInPortfolio={portfolioItems.some(i => i.product.id === product.id)}
          compare={compare}
          onCompareToggle={onCompareToggle}
          onCalcProduct={onCalcProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
