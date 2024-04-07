const router = require('express').Router()
const controller = require('../controllers/contractors')
const detailsController = require('../controllers/contractorDetails')
const awardsController = require('../controllers/contractorAwards')
const affiliationsController = require('../controllers/contractorAffiliations')
const badgesController = require('../controllers/contractorBadges')
const reviewsController = require('../controllers/contractorReviews')
const projectsController = require('../controllers/contractorProjects')

router.post('/create', controller.createContractor)
router.post('/createDetails', detailsController.createContractorDetails)
router.put('/updateDetails', detailsController.updateContractorDetails)
router.post('/createAffiliation', affiliationsController.createContractorAffiliation)
router.post('/createAward', awardsController.createContractorAward)
router.post('/createBadge', badgesController.createContractorBadge)
router.post('/createReview', reviewsController.createContractorReview)
router.post('/addReviewImage', reviewsController.addImage)
router.post('/createProject', projectsController.createContractorProject)
router.post('/addProjectImage', projectsController.addImage)
router.delete('/deleteAffiliation', affiliationsController.deleteAffiliation)
router.delete('/deleteAward', awardsController.deleteAward)
router.delete('/deleteBadge', badgesController.deleteBadge)
router.delete('/deleteReview', reviewsController.deleteReview)
router.delete('/deleteProject', projectsController.deleteProject)
router.get('/details/:id', controller.getContractorDetails)
router.get('/all', controller.getAllContractors);
router.get('/single/:id', controller.getContractor);
router.get('/allActive', controller.getAllActiveContractors);
router.get('/allAssigned/:request', controller.getAllAssignedContractors);
router.get('/category/:category', controller.getContractorsByCategory);
router.get('/featured', controller.getFeaturedContractors);
router.put('/update', controller.updateContractor)
router.delete('/delete/:id', controller.deleteContractor);
router.put('/status', controller.updateContractorStatus)
router.put('/featured', controller.updateContractorFeatured)

module.exports = router;
