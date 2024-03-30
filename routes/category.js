const router = require('express').Router();
const controller = require('../controllers/category')

router.post('/create', controller.createCategory)
router.get('/single/:id', controller.getCategory)
router.get('/all', controller.getAllCategories);
router.get('/allActive', controller.getAllActiveCategories);
router.get('/featured', controller.getFeaturedCategories);
router.put('/update', controller.updateCategory)
router.delete('/delete/:id', controller.deleteCategory);
router.put('/status', controller.updateCategoryStatus)
router.put('/featured', controller.updateCategoryFeatured)
router.put('/popular', controller.updateCategoryPopular)

module.exports = router;
