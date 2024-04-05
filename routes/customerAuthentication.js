const router = require('express').Router();
const controller = require('../controllers/customerAuthentication')

router.post('/login', controller.Login)
router.post('/register', controller.Register)

module.exports = router;
