const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

// Basic rate limiter for all users (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { message: 'Too many requests, please try again later.' },
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// Root route (GET /)
app.get('/', (req, res) => {
  res.send('Hello, user!'); // This message should be returned for each request
});

app.listen(3003, () => {
  console.log('Server running on port 3003');
});
