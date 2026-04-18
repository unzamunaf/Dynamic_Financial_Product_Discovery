# Dynamic Financial Product Discovery Platform

A modern, full-stack FinTech web application for discovering, comparing, and managing financial products. Built with React, Node.js, Express, and MongoDB.

---

## 🚀 Features
- **Home Page:** Platform overview, featured products, category navigation, call-to-action, and quick stats.
- **Product Listing:** Comprehensive filters (risk, return, category, liquidity, time horizon, min investment), search, sorting, and comparison.
- **Product Detail:** Full product info, decision insights, risk visualization, return calculator, and add to portfolio.
- **User Financial Profile:** Profile form with validation, summary, persistent storage, and live recommendation preview.
- **Portfolio Management:** Add/remove/edit allocations, summary stats, risk/category breakdown, diversification score, and warnings.
- **Recommendation Engine:** Dynamic, profile-driven product recommendations.
- **Dark Mode:** Toggle between light and dark themes.
- **Accessibility:** ARIA labels, keyboard navigation, and high-contrast design.
- **Unit Tests:** For key components and utilities.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/unzamunaf/Dynamic_Financial_Product_Discovery.git
   cd Dynamic_Financial_Product_Discovery
   ```
2. **Install backend dependencies:**
   ```
   cd backend
   npm install
   # (Optional) Seed the database:
   node seed.js
   npm start
   ```
3. **Install frontend dependencies:**
   ```
   cd ../frontend
   npm install
   npm start
   ```
4. **Open the app:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

---

---

## 🧩 Component Hierarchy Diagram

```
App
├── Navbar
├── Home
├── ProductListing
│   ├── FilterPanel
│   └── ProductList
│       └── ProductCard
├── ProductDetail
├── UserProfile
│   └── ProfileForm
├── Portfolio
│   ├── PortfolioSummary
│   └── PortfolioItem
├── Recommendations
│   └── RecommendationList
└── ReturnCalculatorModal
```

---

## 💸 Financial Logic Overview

- **Product Data Model:**
  - Each product has: id, name, category, expectedReturn, riskLevel, liquidity, timeHorizon, minInvestment, description, image.
- **Filtering:**
  - AND logic across all filters (risk, return, category, liquidity, time horizon, min investment).
- **Recommendation Engine:**
  - Maps user profile to allowed product risk, horizon, liquidity, and budget.
  - Returns dynamically filtered and sorted products based on profile.
- **Portfolio Calculations:**
  - Total invested, weighted expected return, risk/category distribution, diversification score.
- **Decision Insights:**
  - Dynamic explanations for each product based on its attributes.

---


## 📄 License
MIT
