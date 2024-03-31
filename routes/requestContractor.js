const router = require('express').Router();
const controller = require('../controllers/requestContractor')

router.post('/create', controller.createRequestContractor)
router.delete('/delete/:id', controller.deleteRequestContractor);

module.exports = router;
