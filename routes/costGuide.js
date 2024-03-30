const router = require('express').Router()
const controller = require('../controllers/costGuides')

router.post('/create', controller.createCostGuide)
router.get('/all', controller.getAllCostGuides)
router.get('/allActive', controller.getAllActiveCostGuides)
router.get('/single/:id', controller.getCostGuide)
router.get('/featured', controller.getFeaturedCostGuides)
router.put('/update', controller.updateCostGuide)
router.delete('/delete/:id', controller.deleteCostGuide)
router.put('/status', controller.updateCostGuideStatus)
router.put('/featured', controller.updateCostGuideFeatured)

module.exports = router
