// routes/products.js
const express = require('express');
const router = express.Router();
const FinancialProduct = require('../models/FinancialProduct');

// GET /api/products - fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await FinancialProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/products/:id - fetch product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await FinancialProduct.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;