const router = require('express').Router();
const controller = require('../controllers/customer')

router.post('/passwordLessCreate', controller.createPasswordLessCustomer)
router.get('/single/:id', controller.getCustomer)
router.get('/all', controller.getAllCustomers);
router.put('/updatePassword', controller.updatePassword)

module.exports = router;
