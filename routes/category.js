const router = require('express').Router();
const controller = require('../controllers/category')

router.post('/create', controller.createCategory)
router.get('/all', controller.getAllCategories);
router.get('/featured', controller.getFeaturedCategories);
router.delete('/delete/:id', controller.deleteCategory);
router.put('/status', controller.updateCategoryStatus)
router.put('/featured', controller.updateCategoryFeatured)

module.exports = router;
