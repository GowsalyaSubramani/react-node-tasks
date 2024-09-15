// routes/protected.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Dashboard route
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send('Welcome to your dashboard!');
});

module.exports = router;
