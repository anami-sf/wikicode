const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user')

//What is the "verify cb"
//passport.use( new GoogleStratey( ), verify_cb )
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  //question: is google feeding all the args below?
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    User.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        //TODO: What to do if ther is a  user 
        return cb(null, student)
      } else {
        // we have a new user via OAuth!
        var newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        })
        //TODO: refactor with create
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newStudent);
        })
      }
    })
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  })
})