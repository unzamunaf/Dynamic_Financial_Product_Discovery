// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');

const portfolioRoute = require('./routes/portfolio');
const profileRoute = require('./routes/profile');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://unza_assignment:unza123munaf@cluster0.fdma2vg.mongodb.net/fintech?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api/products', productsRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/profile', profileRoute);

// Root endpoint
app.get('/', (req, res) => {
  res.send('FinTech Backend API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
