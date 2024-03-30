const router = require('express').Router();
const controller = require('../controllers/testimonial')

router.post('/create', controller.createTestimonial)
router.get('/all', controller.getAllTestimonials);
router.get('/allActive', controller.getAllActiveTestimonials);
router.get('/featured', controller.getFeaturedTestimonials);
router.get('/single/:id', controller.getTestimonial);
router.put('/update', controller.updateTestimonial)
router.delete('/delete/:id', controller.deleteTestimonial)
router.put('/status', controller.updateTestimonialStatus)
router.put('/featured', controller.updateTestimonialFeatured)

module.exports = router;
