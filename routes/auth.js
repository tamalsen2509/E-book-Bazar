let express = require('express');
let router = express.Router();
let passport = require('passport');


router.get('/google',
    passport.authenticate('google', { scope:
        [ 'email', 'profile' ] }
));

router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
}));









module.exports = router;