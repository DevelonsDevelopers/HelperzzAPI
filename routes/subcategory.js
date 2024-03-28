const router = require('express').Router();
const controller = require("../controllers/subcategory");

router.post('/create', controller.createSubcategory)
router.get('/all', controller.getAllSubcategories);

module.exports = router
