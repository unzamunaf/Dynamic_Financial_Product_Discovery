import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';
import Portfolio from './pages/Portfolio';
import Recommendations from './pages/Recommendations';
import NotFound from './pages/NotFound';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { UserProfileProvider } from './contexts/UserProfileContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <UserProfileProvider>
        <PortfolioProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </PortfolioProvider>
      </UserProfileProvider>
    </ThemeProvider>
  );
}

export default App;
