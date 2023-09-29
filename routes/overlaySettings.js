// routes/overlaySettings.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware for authentication
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Authentication required' });
}

// CRUD operations for overlay settings
router.get('/', isLoggedIn, (req, res) => {
  // Replace this with your database logic to fetch overlay settings
  res.json({ text: 'Sample Overlay', x: 50, y: 50 });
});

router.put('/', isLoggedIn, (req, res) => {
  // Replace this with your database logic to update overlay settings
  res.sendStatus(200);
});

module.exports = router;
