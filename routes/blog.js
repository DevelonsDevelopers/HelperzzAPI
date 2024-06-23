const router = require('express').Router();
const controller = require('../controllers/blog')

router.post('/create', controller.createBlog)
router.get('/all', controller.getAllBlogs);
router.get('/page', controller.getBlogs);
router.get('/allActive', controller.getAllActiveBlogs);
router.get('/single/:id', controller.getBlog);
router.get('/tag/:tag', controller.getBlogByTag);
router.get('/featured', controller.getFeaturedBlogs);
router.get('/related/:category', controller.getRelatedBlogs);
router.put('/update', controller.updateBlog)
router.delete('/delete/:id', controller.deleteBlog);
router.put('/status', controller.updateBlogStatus)
router.put('/featured', controller.updateBlogFeatured)

module.exports = router;
