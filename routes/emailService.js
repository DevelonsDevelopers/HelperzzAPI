const router = require('express').Router();
const controller = require('../controllers/emailService')

router.post('/contractor', controller.contractorEmail)
router.post('/customerForgotPassword', controller.customerForgotPassword)

router.post('/infoContractor', controller.infoContractor)

router.post('/contractorRegistration', controller.contractorRegistration)

module.exports = router;
