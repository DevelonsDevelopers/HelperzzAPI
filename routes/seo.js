const router = require('express').Router();
const controller = require('../controllers/seo')

router.post('/create', controller.createSEO)
router.get('/single/:id', controller.getSEO)
router.get('/all', controller.getAllSEO);
router.put('/update', controller.updateSEO)
router.delete('/delete/:id', controller.deleteSEO);

module.exports = router;
