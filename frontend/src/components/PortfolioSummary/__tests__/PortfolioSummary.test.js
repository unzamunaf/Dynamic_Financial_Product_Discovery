import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioSummary from '../PortfolioSummary';

describe('PortfolioSummary', () => {
  it('renders portfolio stats', () => {
    const portfolio = {
      totalInvested: 50000,
      weightedReturn: 10,
      diversificationScore: 0.8,
      categoryDistribution: { Equity: 30000, Bonds: 20000 },
      riskDistribution: { low: 20, medium: 50, high: 30 },
    };
    render(<PortfolioSummary portfolio={portfolio} />);
    expect(screen.getByText(/Total Invested/i)).toHaveTextContent('50000');
    expect(screen.getByText(/Weighted/i)).toHaveTextContent('10');
    expect(screen.getByText(/Diversification/i)).toHaveTextContent('0.8');
    expect(screen.getByText(/Equity/)).toBeInTheDocument();
    expect(screen.getByText(/Bonds/)).toBeInTheDocument();
  });
});
