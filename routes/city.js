const router = require('express').Router();
const controller = require('../controllers/city')

router.post('/create', controller.createCity)
router.get('/single/:id', controller.getCity)
router.get('/tag/:tag', controller.getCityByTag)
router.get('/all', controller.getAllCities);
router.get('/allActive', controller.getAllActiveCities);
router.put('/update', controller.updateCity)
router.delete('/delete/:id', controller.deleteCity);

module.exports = router;
