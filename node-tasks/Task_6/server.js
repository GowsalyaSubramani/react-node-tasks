// server.js
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const app = express();
const port = 3022;

// Passport configuration
const passportConfig = require('./config/passport');
passportConfig(passport);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(csrf());

// Global variables for flash messages and CSRF token
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.csrfToken = req.csrfToken();
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the authentication app!');
});

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

// Protected routes
const protectedRoutes = require('./routes/protected');
app.use('/', protectedRoutes);

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
