const router = require('express').Router();
const controller = require('../controllers/userAuthentication')

router.post('/login', controller.Login)

module.exports = router;
