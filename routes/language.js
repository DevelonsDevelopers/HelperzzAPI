const router = require('express').Router();
const controller = require('../controllers/language')

router.post('/create', controller.createLanguage)
router.get('/single/:id', controller.getLanguage)
router.get('/all', controller.getAllLanguages);
router.put('/update', controller.updateLanguage)
router.delete('/delete/:id', controller.deleteLanguage);

module.exports = router;
