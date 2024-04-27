const router = require('express').Router()
const controller = require('../controllers/contractorReviews')

router.get('/all', controller.getAllReviews)
router.get('/category/:category', controller.getByCategory)
router.put('/approve/:id', controller.approveReview)
router.put('/reject/:id', controller.rejectReview)

module.exports = router
