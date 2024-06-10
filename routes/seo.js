const router = require('express').Router();
const controller = require('../controllers/seo')

router.post('/create', controller.createSEO)
router.get('/single/:id', controller.getSEO)
router.get('/singleCityCategory/:id', controller.getCityCategorySEO)
router.get('/contractor/:tag', controller.getContractorPageSEO)
router.get('/category/:tag', controller.getCategoryPageSEO)
router.get('/blog/:tag', controller.getBlogPageSEO)
router.get('/subcategory/:tag', controller.getSubcategoryPageSEO)
router.get('/costguide/:tag', controller.getCostGuidePageSEO)
router.get('/get/:route', controller.getSEObyRoute)
router.get('/all', controller.getAllSEO);
router.get('/cityCategory', controller.getCityCategory);
router.post('/createCityCategory', controller.createCityCategorySEO);
router.put('/updateCityCategory', controller.updateCityCategorySEO)
router.put('/update', controller.updateSEO)
router.delete('/delete/:id', controller.deleteSEO);

module.exports = router;
