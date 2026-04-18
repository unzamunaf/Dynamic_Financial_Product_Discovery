import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function RecommendationList({ recommendations, profile }) {
  return (
    <div className="recommendation-list">
      {recommendations.map(product => (
        <ProductCard key={product.id} product={product} isInPortfolio={false} />
      ))}
    </div>
  );
}

export default RecommendationList;
