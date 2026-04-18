
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { PortfolioContext } from '../../contexts/PortfolioContext';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
  const location = useLocation();
  const { portfolio } = useContext(PortfolioContext);
  const { dark, setDark } = useContext(ThemeContext);
  const portfolioCount = portfolio.items.length;
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''} aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link>
      <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} aria-current={location.pathname === '/products' ? 'page' : undefined}>Products</Link>
      <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''} aria-current={location.pathname === '/profile' ? 'page' : undefined}>Profile</Link>
      <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} aria-current={location.pathname === '/portfolio' ? 'page' : undefined}>Portfolio ({portfolioCount})</Link>
      <Link to="/recommendations" className={location.pathname === '/recommendations' ? 'active' : ''} aria-current={location.pathname === '/recommendations' ? 'page' : undefined}>Recommendations</Link>
      <button
        onClick={() => setDark(d => !d)}
        style={{ marginLeft: 16, padding: '0.4em 1em', borderRadius: 6, border: 'none', background: dark ? '#222' : '#eee', color: dark ? '#fff' : '#222', cursor: 'pointer' }}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {dark ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default Navbar;
