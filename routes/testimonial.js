const router = require('express').Router();
const controller = require('../controllers/testimonial')

router.post('/create', controller.createTestimonial)
router.get('/all', controller.getAllTestimonials);
router.get('/featured', controller.getFeaturedTestimonials);

module.exports = router;
