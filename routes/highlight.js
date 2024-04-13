const router = require('express').Router();
const controller = require('../controllers/highlight')

router.post('/create', controller.createHighlight)
router.get('/single/:id', controller.getHighlight)
router.get('/all', controller.getAllHighlights);
router.put('/update', controller.updateHighlight)
router.delete('/delete/:id', controller.deleteHighlight);

module.exports = router;
