const router = require('express').Router();
const controller = require('../controllers/user')

router.post('/create', controller.createUser)
router.get('/single/:id', controller.getUser)
router.get('/all', controller.getAllUsers);
router.put('/update', controller.updateUser)
router.delete('/delete/:id', controller.deleteUser);
router.put('/status', controller.updateUserStatus)

module.exports = router;
