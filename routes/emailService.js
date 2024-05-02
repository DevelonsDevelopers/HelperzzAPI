const router = require('express').Router();
const controller = require('../controllers/emailService')

router.post('/contractor', controller.contractorEmail)
router.post('/customerForgotPassword', controller.customerForgotPassword)

module.exports = router;
