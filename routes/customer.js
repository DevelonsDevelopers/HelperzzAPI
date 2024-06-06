const router = require('express').Router();
const controller = require('../controllers/customer')

router.post('/passwordLessCreate', controller.createPasswordLessCustomer)
router.get('/single/:id', controller.getCustomer)
router.get('/reviews/:id', controller.getReviews)
router.get('/all', controller.getAllCustomers);
router.put('/updatePassword', controller.updatePassword)
router.put('/setPassword', controller.setPassword)
router.put('/verifyEmail', controller.verifyEmail)
router.get('/checkToken/:token', controller.checkToken)
router.put('/status', controller.updateCustomerStatus)

module.exports = router;
