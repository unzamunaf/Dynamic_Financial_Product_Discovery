// routes/portfolio.js
const express = require('express');
const router = express.Router();

// In-memory mock for demonstration (replace with DB in production)
let userPortfolio = {
  items: [],
  totalInvested: 0,
  weightedReturn: 0,
  riskDistribution: { low: 0, medium: 0, high: 0 }
};

// GET /api/portfolio - fetch current portfolio
router.get('/', (req, res) => {
  res.json(userPortfolio);
});

// POST /api/portfolio - update portfolio
router.post('/', (req, res) => {
  userPortfolio = req.body;
  res.json({ message: 'Portfolio updated', portfolio: userPortfolio });
});

module.exports = router;
