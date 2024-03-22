const router = require('express').Router();
const controller = require('../controllers/user')

router.get('/all', controller.getAllUsers);

module.exports = router;
