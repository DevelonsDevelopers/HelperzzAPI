const router = require('express').Router();
const controller = require('../controllers/customer')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/passwordLessCreate', controller.createPasswordLessCustomer)
router.get('/single/:id', controller.getCustomer)
router.get('/profile',
    authMiddleware.stripToken,
    authMiddleware.verifyToken,
    controller.getProfile)
router.get('/reviews',
    authMiddleware.stripToken,
    authMiddleware.verifyToken,
    controller.getReviews)
router.get('/requests',
    authMiddleware.stripToken,
    authMiddleware.verifyToken,
    controller.getRequests)
router.get('/all', controller.getAllCustomers);
router.put('/updatePassword', controller.updatePassword)
router.put('/setPassword', controller.setPassword)
router.put('/verifyEmail', controller.verifyEmail)
router.get('/checkToken/:token', controller.checkToken)
router.put('/status', controller.updateCustomerStatus)

module.exports = router;
