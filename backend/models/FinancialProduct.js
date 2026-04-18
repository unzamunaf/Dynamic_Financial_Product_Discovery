// models/FinancialProduct.js
const mongoose = require('mongoose');

const VALID_CATEGORIES = ['savings', 'investment', 'insurance', 'crypto'];
const VALID_RISK_LEVELS = ['low', 'medium', 'high'];
const VALID_LIQUIDITY = ['easy', 'moderate', 'locked'];
const VALID_TIME_HORIZON = ['short', 'medium', 'long'];

const FinancialProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: VALID_CATEGORIES,
    required: true
  },
  expectedReturn: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        // Data consistency: low risk cannot have >10% return, high risk cannot have <10%
        if (this.riskLevel === 'low' && v > 10) return false;
        if (this.riskLevel === 'high' && v < 10) return false;
        return true;
      },
      message: 'Expected return is inconsistent with risk level.'
    }
  },
  riskLevel: {
    type: String,
    enum: VALID_RISK_LEVELS,
    required: true
  },
  liquidity: {
    type: String,
    enum: VALID_LIQUIDITY,
    required: true
  },
  timeHorizon: {
    type: String,
    enum: VALID_TIME_HORIZON,
    required: true
  },
  minInvestment: {
    type: Number,
    required: true,
    min: 1000
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('FinancialProduct', FinancialProductSchema);