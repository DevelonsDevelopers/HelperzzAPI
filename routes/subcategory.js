const router = require('express').Router();
const controller = require("../controllers/subcategory");

router.post('/create', controller.createSubcategory)
router.get('/all', controller.getAllSubcategories);
router.get('/category/:id', controller.getSubcategoriesByCategory);
router.get('/allActive', controller.getAllActiveSubcategories);
router.get('/single/:id', controller.getSubcategory);
router.get('/tag/:tag', controller.getSubcategoryByTag);
router.put('/update', controller.updateSubcategory)
router.delete('/delete/:id', controller.deleteSubcategory)
router.put('/status', controller.updateSubcategoryStatus)

module.exports = router

