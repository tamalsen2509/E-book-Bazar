let express = require('express');
let router = express.Router();
let indexController = require('../controller/indexController') // route based logic save to controller dir
let authMiddleware = require('../middleware/helper')


router.get('/', indexController.getIndex )

router.get('/dashboard',authMiddleware.isAuth , indexController.getDashboard)



module.exports = router;