const passport = require('passport');

//import all the strategies//
const SignupStrategy = require('../passport/SignupStrategy');
const SigninStrategy = require('../passport/SigninStrategy');
// const GoogleStrategy = require('../passport/GoogleStrategy');
// const GithubStrategy = require('../passport/GithubStrategy');
// const TwitterStrategy = require('../passport/TwitterStrategy');

//configure the strategies in//
passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;