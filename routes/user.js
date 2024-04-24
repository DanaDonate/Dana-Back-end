const router = require('express').Router();

router.post('/donate',require('../controllers/user_controller').add_Donate);

router.post('/help-support',require('../controllers/user_controller').help_message);


module.exports = router;