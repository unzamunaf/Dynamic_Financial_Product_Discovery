import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReturnCalculatorModal from '../../pages/ReturnCalculatorModal';

describe('ReturnCalculatorModal', () => {
  const products = [
    { id: 'p1', name: 'A', expectedReturn: 10 },
    { id: 'p2', name: 'B', expectedReturn: 15 },
  ];
  it('renders product select and calculates return', () => {
    render(<ReturnCalculatorModal products={products} product={products[0]} onClose={() => {}} />);
    fireEvent.change(screen.getByLabelText(/Investment Amount/i), { target: { value: '10000' } });
    fireEvent.change(screen.getByLabelText(/Years/i), { target: { value: '2' } });
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(screen.getByText(/Total after 2 years/i)).toBeInTheDocument();
    expect(screen.getByText(/Gain:/i)).toBeInTheDocument();
  });
});
