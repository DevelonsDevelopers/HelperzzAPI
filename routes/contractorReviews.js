const router = require('express').Router()
const controller = require('../controllers/contractorReviews')

router.get('/all', controller.getAllReviews)
router.get('/single/:id', controller.getReview)
router.get('/category/:category', controller.getByCategory)
router.put('/approve/:id', controller.approveReview)
router.put('/reject/:id', controller.rejectReview)
router.delete('/delete/:id', controller.deleteReview)

module.exports = router
