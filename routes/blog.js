const router = require('express').Router();
const controller = require('../controllers/blog')

router.post('/create', controller.createBlog)
router.get('/all', controller.getAllBlogs);
router.get('/featured', controller.getFeaturedBlogs);
router.delete('/delete/:id', controller.deleteBlog);
router.put('/status', controller.updateBlogStatus)
router.put('/featured', controller.updateBlogFeatured)

module.exports = router;
