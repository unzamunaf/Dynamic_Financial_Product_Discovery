// backend/seed.js
const mongoose = require('mongoose');
const FinancialProduct = require('./models/FinancialProduct');

const products = [
  {
    id: 'sav-001',
    name: 'Premium Savings Account',
    category: 'savings',
    description: 'High-yield savings with competitive interest rates...',
    expectedReturn: 5.5,
    riskLevel: 'low',
    liquidity: 'easy',
    timeHorizon: 'short',
    minInvestment: 10000,
    image: 'https://example.com/savings.jpg'
  },
  {
    id: 'inv-002',
    name: 'Equity Growth Fund',
    category: 'investment',
    description: 'Diversified equity fund for long-term growth...',
    expectedReturn: 12.8,
    riskLevel: 'medium',
    liquidity: 'moderate',
    timeHorizon: 'long',
    minInvestment: 50000,
    image: 'https://example.com/fund.jpg'
  },
  {
    id: 'cry-003',
    name: 'Bitcoin Investment',
    category: 'crypto',
    description: 'Direct cryptocurrency investment...',
    expectedReturn: 25.0,
    riskLevel: 'high',
    liquidity: 'easy',
    timeHorizon: 'long',
    minInvestment: 5000,
    image: 'https://example.com/crypto.jpg'
  },
  {
    id: 'ins-004',
    name: 'Term Life Insurance',
    category: 'insurance',
    description: 'Comprehensive life coverage with investment component...',
    expectedReturn: 6.5,
    riskLevel: 'low',
    liquidity: 'locked',
    timeHorizon: 'long',
    minInvestment: 20000,
    image: 'https://example.com/insurance.jpg'
  }
];

async function seed() {
  await mongoose.connect('mongodb+srv://unza_assignment:unza123munaf@cluster0.fdma2vg.mongodb.net/fintech?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await FinancialProduct.deleteMany({});
  await FinancialProduct.insertMany(products);
  console.log('Database seeded!');
  mongoose.disconnect();
}

seed();
