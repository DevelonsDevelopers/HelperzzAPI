const router = require('express').Router();
const controller = require('../controllers/contact')

router.post('/create', controller.createContact)
router.get('/single/:id', controller.getContact)
router.get('/all', controller.getAllContacts);
router.delete('/delete/:id', controller.deleteContact);

module.exports = router;
