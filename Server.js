// server.js
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/livestream-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// API routes
const overlaySettingsRouter = require('./routes/overlaySettings');
app.use('/api/overlay', overlaySettingsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
