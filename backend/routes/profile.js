// routes/profile.js
const express = require('express');
const router = express.Router();

// In-memory mock for demonstration (replace with DB in production)
let userProfile = null;

// GET /api/profile - fetch user profile
router.get('/', (req, res) => {
  res.json(userProfile);
});

// POST /api/profile - update user profile
router.post('/', (req, res) => {
  userProfile = req.body;
  res.json({ message: 'Profile updated', profile: userProfile });
});

module.exports = router;
