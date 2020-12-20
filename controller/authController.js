
let passport = require('passport');



exports.getPassport = passport.authenticate('google', {scope : ['profile']} )

exports.getPassportCallback = passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
})

exports.getLogout = (req, res) => {
    req.logout();
    res.redirect('/');
} 