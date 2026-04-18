import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioContext } from '../../../contexts/PortfolioContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(
      <ThemeContext.Provider value={{ dark: false, setDark: jest.fn() }}>
        <PortfolioContext.Provider value={{ portfolio: { items: [] } }}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </PortfolioContext.Provider>
      </ThemeContext.Provider>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommendations/i)).toBeInTheDocument();
  });

  it('toggles dark mode', () => {
    const setDark = jest.fn();
    render(
      <ThemeContext.Provider value={{ dark: false, setDark }}>
        <PortfolioContext.Provider value={{ portfolio: { items: [] } }}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </PortfolioContext.Provider>
      </ThemeContext.Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(setDark).toHaveBeenCalled();
  });
});
