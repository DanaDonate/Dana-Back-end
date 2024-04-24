const router = require('express').Router();

router.get('/',require('../controllers/admin_controller').show_all_payments);

router.get('/help-message',require('../controllers/admin_controller').show_all_help);

router.post('/payment-received',require('../controllers/admin_controller').payment_received);

router.post('/payment-not-received',require('../controllers/admin_controller').payment_not_received);

router.post('/payment-delete',require('../controllers/admin_controller').payment_delete);


module.exports = router;