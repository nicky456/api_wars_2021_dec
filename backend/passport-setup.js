const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '349426630795-30gstjmvqaolqtd495arc5fg91fpuoup.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));