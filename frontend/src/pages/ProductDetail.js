import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import RiskBadge from '../components/RiskBadge/RiskBadge';
import ReturnDisplay from '../components/ReturnDisplay/ReturnDisplay';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{margin:'2em'}}>Loading...</div>;
  if (error) return <div style={{margin:'2em', color:'red'}}>{error}</div>;
  if (!product) return <div style={{margin:'2em'}}>Product not found.</div>;

  return (
    <div className="product-detail-page" style={{maxWidth:600, margin:'2em auto', background:'#fff', borderRadius:12, boxShadow:'0 2px 12px rgba(25,118,210,0.07)', padding:'2em'}}>
      <h1 style={{marginBottom:'0.5em'}}>{product.name}</h1>
      <div style={{display:'flex', gap:24, alignItems:'flex-start', flexWrap:'wrap'}}>
        <img src={product.image} alt={product.name} style={{width:180, height:180, objectFit:'cover', borderRadius:10, border:'1px solid #eee', background:'#f8f9fa'}} />
        <div style={{flex:1}}>
          <div style={{marginBottom:8}}>
            <span className={`category-badge category-${product.category}`}>{product.category}</span>
          </div>
          <div style={{marginBottom:8}}>
            <ReturnDisplay value={product.expectedReturn} />
            <RiskBadge riskLevel={product.riskLevel} size="md" />
          </div>
          <div style={{marginBottom:8}}>Liquidity: <b>{product.liquidity}</b></div>
          <div style={{marginBottom:8}}>Min Investment: <b>PKR {product.minInvestment}</b></div>
          <div style={{marginBottom:8}}>Time Horizon: <b>{product.timeHorizon}</b></div>
          <div style={{marginBottom:8}}>Description: <span>{product.description || 'No description provided.'}</span></div>
        </div>
      </div>
      {/* Add more insights, calculator, add to portfolio, etc. here */}
    </div>
  );
}

export default ProductDetail;
