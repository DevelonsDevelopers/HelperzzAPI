const router = require('express').Router();
const controller = require('../controllers/city')

router.get('/single/:id', controller.getCity)
router.get('/tag/:tag', controller.getCityByTag)
router.get('/all', controller.getAllCities);
router.get('/allActive', controller.getAllActiveCities);

module.exports = router;
