let express = require('express');
let router = express.Router();
//let passport = require('passport');
let passportAuthController = require('../controller/authController') // route based logic save to controller dir


router.get('/google',passportAuthController.getPassport);

router.get('/google/callback', passportAuthController.getPassportCallback);

router.get( '/logout', passportAuthController.getLogout);










module.exports = router;