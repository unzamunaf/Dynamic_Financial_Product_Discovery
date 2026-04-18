import React, { useEffect, useState, useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';
import { UserProfileContext } from '../contexts/UserProfileContext';
import { fetchProducts } from '../utils/api';
import { transformToFinancialProduct } from '../utils/transform';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import ProductList from '../components/ProductList/ProductList';
import Modal from '../components/Modal';
import ReturnCalculatorModal from './ReturnCalculatorModal';
import { useState as useStateOriginal } from 'react';

const defaultFilters = {
  risk: [],
  returnRange: [0, 30],
  category: [],
  liquidity: 'all',
  timeHorizon: 'all',
  minInvestment: '',
  search: ''
};

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [compare, setCompare] = useState([]); // array of product ids
  const [showCompare, setShowCompare] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcProduct, setCalcProduct] = useState(null);
  const { portfolio, addToPortfolio } = useContext(PortfolioContext);
  const { profile } = useContext(UserProfileContext);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(data => {
        setProducts(data.map(transformToFinancialProduct));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters(prev => ({ ...prev, search }));
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    // AND logic for all filters
    let result = products.filter(product => {
      const [minReturn, maxReturn] = filters.returnRange;
      const matchesSearch =
        !filters.search ||
        product.name.toLowerCase().includes(filters.search.toLowerCase());
      return (
        (filters.risk.length === 0 || filters.risk.includes(product.riskLevel)) &&
        product.expectedReturn >= minReturn && product.expectedReturn <= maxReturn &&
        (filters.category.length === 0 || filters.category.includes(product.category)) &&
        (filters.liquidity === 'all' || product.liquidity === filters.liquidity) &&
        (filters.timeHorizon === 'all' || product.timeHorizon === filters.timeHorizon) &&
        (filters.minInvestment === '' || product.minInvestment <= Number(filters.minInvestment)) &&
        matchesSearch
      );
    });
    // Sorting
    if (sort === 'return-asc') {
      result = result.slice().sort((a, b) => a.expectedReturn - b.expectedReturn);
    } else if (sort === 'return-desc') {
      result = result.slice().sort((a, b) => b.expectedReturn - a.expectedReturn);
    } else if (sort === 'risk-asc') {
      const riskOrder = { low: 1, medium: 2, high: 3 };
      result = result.slice().sort((a, b) => riskOrder[a.riskLevel] - riskOrder[b.riskLevel]);
    } else if (sort === 'risk-desc') {
      const riskOrder = { low: 1, medium: 2, high: 3 };
      result = result.slice().sort((a, b) => riskOrder[b.riskLevel] - riskOrder[a.riskLevel]);
    } else if (sort === 'minInvestment-asc') {
      result = result.slice().sort((a, b) => a.minInvestment - b.minInvestment);
    } else if (sort === 'minInvestment-desc') {
      result = result.slice().sort((a, b) => b.minInvestment - a.minInvestment);
    }
    setFilteredProducts(result);
  }, [products, filters, sort]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  // Comparison logic
  const handleCompareToggle = (id) => {
    setCompare(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };
  const comparedProducts = filteredProducts.filter(p => compare.includes(p.id));

  return (
    <div>
      <h1>Product Listing</h1>
      <div style={{ margin: '1em 0', display: 'flex', gap: 16, alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search products by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.5em', width: 300, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '0.5em', borderRadius: 6 }}>
          <option value="">Sort by...</option>
          <option value="return-asc">Return: Low to High</option>
          <option value="return-desc">Return: High to Low</option>
          <option value="risk-asc">Risk: Low to High</option>
          <option value="risk-desc">Risk: High to Low</option>
          <option value="minInvestment-asc">Min Investment: Low to High</option>
          <option value="minInvestment-desc">Min Investment: High to Low</option>
        </select>
        <button
          disabled={compare.length < 2}
          onClick={() => setShowCompare(true)}
          style={{ padding: '0.5em 1em', borderRadius: 6, background: compare.length < 2 ? '#ccc' : '#007bff', color: '#fff', border: 'none' }}
        >
          Compare ({compare.length})
        </button>
        <button
          onClick={() => setShowCalculator(true)}
          style={{ padding: '0.5em 1em', borderRadius: 6, background: '#28a745', color: '#fff', border: 'none' }}
        >
          Return Calculator
        </button>
      </div>
      <FilterPanel filters={filters} onFilterChange={handleFilterChange} productCount={filteredProducts.length} />
      <ProductList
        products={filteredProducts}
        filters={filters}
        onAddToPortfolio={addToPortfolio}
        portfolioItems={portfolio.items}
        compare={compare}
        onCompareToggle={handleCompareToggle}
        onCalcProduct={p => { setCalcProduct(p); setShowCalculator(true); }}
      />
      {filteredProducts.length === 0 && <div>No products match the selected filters.</div>}
      {showCompare && (
        <Modal onClose={() => setShowCompare(false)}>
          <h2>Compare Products</h2>
          <div style={{ display: 'flex', gap: 24 }}>
            {comparedProducts.map(p => (
              <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minWidth: 220 }}>
                <h3>{p.name}</h3>
                <div>Category: {p.category}</div>
                <div>Risk: {p.riskLevel}</div>
                <div>Return: {p.expectedReturn}%</div>
                <div>Min Investment: PKR {p.minInvestment.toLocaleString()}</div>
                <div>Liquidity: {p.liquidity}</div>
                <div>Time Horizon: {p.timeHorizon}</div>
                <div>{p.description}</div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      {showCalculator && (
        <Modal onClose={() => { setShowCalculator(false); setCalcProduct(null); }}>
          <ReturnCalculatorModal
            product={calcProduct}
            products={filteredProducts}
            onClose={() => { setShowCalculator(false); setCalcProduct(null); }}
          />
        </Modal>
      )}
    </div>
  );
}

export default ProductListing;
