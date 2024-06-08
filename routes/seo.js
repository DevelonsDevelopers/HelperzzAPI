const router = require('express').Router();
const controller = require('../controllers/seo')

router.post('/create', controller.createSEO)
router.get('/single/:id', controller.getSEO)
router.get('/contractor/:tag', controller.getContractorPageSEO)
router.get('/category/:tag', controller.getCategoryPageSEO)
router.get('/blog/:tag', controller.getBlogPageSEO)
router.get('/subcategory/:tag', controller.getSubcategoryPageSEO)
router.get('/costguide/:tag', controller.getCostGuidePageSEO)
router.get('/get/:route', controller.getSEObyRoute)
router.get('/all', controller.getAllSEO);
router.put('/update', controller.updateSEO)
router.delete('/delete/:id', controller.deleteSEO);

module.exports = router;
