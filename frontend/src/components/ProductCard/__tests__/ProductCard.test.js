import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../ProductCard/ProductCard';

const mockProduct = {
  id: 'p1',
  name: 'Test Product',
  category: 'Equity',
  expectedReturn: 12,
  riskLevel: 'medium',
  minInvestment: 10000,
  liquidity: 'easy',
  timeHorizon: 'short',
  image: '',
};

describe('ProductCard', () => {
  it('renders product details', () => {
    render(<ProductCard product={mockProduct} isInPortfolio={false} onAddToPortfolio={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Equity')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('easy')).toBeInTheDocument();
    expect(screen.getByText('PKR 10000')).toBeInTheDocument();
  });

  it('calls onAddToPortfolio when button clicked', () => {
    const onAdd = jest.fn();
    render(<ProductCard product={mockProduct} isInPortfolio={false} onAddToPortfolio={onAdd} />);
    fireEvent.click(screen.getByText(/Add to Portfolio/i));
    expect(onAdd).toHaveBeenCalled();
  });

  it('disables button if already in portfolio', () => {
    render(<ProductCard product={mockProduct} isInPortfolio={true} onAddToPortfolio={() => {}} />);
    expect(screen.getByText(/Added/i)).toBeDisabled();
  });
});
