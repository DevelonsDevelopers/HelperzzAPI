const router = require('express').Router();
const controller = require('../controllers/successStories')

router.post('/create', controller.createSuccessStories)
router.get('/single/:id', controller.getSuccessStory)
router.get('/all', controller.getAllSuccessStories);
router.get('/allActive', controller.getAllActiveSuccessStories);
router.get('/popular', controller.getPopularSuccessStory);
router.put('/update', controller.updateSuccessStory)
router.delete('/delete/:id', controller.deleteSuccessStory);
router.put('/status', controller.updateSuccessStoryStatus)
router.put('/popular', controller.updateSuccessStoryPopular)

module.exports = router;
