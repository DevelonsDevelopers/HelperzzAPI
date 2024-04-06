const router = require('express').Router()
const controller = require('../controllers/contractorReviews')

router.get('/category/:category', controller.getByCategory)

module.exports = router
