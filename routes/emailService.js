const router = require('express').Router();
const controller = require('../controllers/emailService')

router.post('/contractor', controller.contractorEmail)

module.exports = router;
