// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Dummy users for demonstration
const users = [
  { id: 1, username: 'user1', password: '$2a$10$NIXg/fGHt0OdXZ5pU9bme.KxOaMOpDYYo2pW/FgoMi4wxch8o/Q9y' } // password is 'password'
];

module.exports = (passport) => {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      const user = users.find(u => u.username === username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
  });
};
