import React, { useContext, useEffect, useState } from 'react';
import { UserProfileContext } from '../contexts/UserProfileContext';
import RecommendationList from '../components/RecommendationList/RecommendationList';
import { fetchProducts } from '../utils/api';
import { transformToFinancialProduct } from '../utils/transform';

function Recommendations() {
  const { profile, isProfileComplete, getRecommendations } = useContext(UserProfileContext);
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts().then(apiProducts => {
      const prods = apiProducts.map(transformToFinancialProduct);
      setProducts(prods);
      if (isProfileComplete()) {
        setRecommendations(getRecommendations(prods));
      }
      setLoading(false);
    });
  }, [profile]);

  if (!isProfileComplete()) {
    return <div>Please complete your financial profile to see recommendations.</div>;
  }
  if (loading) return <div>Loading recommendations...</div>;

  return (
    <div>
      <h1>Recommendations</h1>
      <RecommendationList recommendations={recommendations} profile={profile} />
      {recommendations.length === 0 && <div>No products match your profile.</div>}
    </div>
  );
}

export default Recommendations;
