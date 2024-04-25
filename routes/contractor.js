const router = require('express').Router()
const controller = require('../controllers/contractors')
const detailsController = require('../controllers/contractorDetails')
const awardsController = require('../controllers/contractorAwards')
const affiliationsController = require('../controllers/contractorAffiliations')
const badgesController = require('../controllers/contractorBadges')
const reviewsController = require('../controllers/contractorReviews')
const projectsController = require('../controllers/contractorProjects')
const areasController = require('../controllers/contractorAreas')
const highlightsController = require('../controllers/contractorHighlights')
const languagesController = require('../controllers/contractorLanguages')
const documentsController = require('../controllers/contractorDocuments')

router.post('/create', controller.createContractor)
router.post('/createDetails', detailsController.createContractorDetails)
router.put('/updateDetails', detailsController.updateContractorDetails)
router.get('/popular', detailsController.getPopularContractors)
router.get('/recent', detailsController.getRecentContractors)
router.post('/createAffiliation', affiliationsController.createContractorAffiliation)
router.post('/createAward', awardsController.createContractorAward)
router.post('/createBadge', badgesController.createContractorBadge)
router.post('/createReview', reviewsController.createContractorReview)
router.post('/addReviewImage', reviewsController.addImage)
router.post('/createProject', projectsController.createContractorProject)
router.post('/createDocument', documentsController.createContractorDocument)
router.post('/addProjectImage', projectsController.addImage)
router.post('/assignArea', areasController.createContractorArea)
router.post('/assignHighlight', highlightsController.createContractorHighlight)
router.post('/assignLanguage', languagesController.createContractorLanguage)
router.delete('/deleteAffiliation', affiliationsController.deleteAffiliation)
router.delete('/deleteAward', awardsController.deleteAward)
router.delete('/deleteBadge', badgesController.deleteBadge)
router.delete('/deleteReview', reviewsController.deleteReview)
router.delete('/deleteProject', projectsController.deleteProject)
router.delete('/deleteDocument', documentsController.deleteDocument)
router.post('/unAssignArea', areasController.deleteArea)
router.post('/unAssignHighlight', highlightsController.deleteHighlight)
router.post('/unAssignLanguage', languagesController.deleteLanguage)
router.get('/details/:id', controller.getContractorDetails)
router.get('/detailsTag/:tag', controller.getContractorDetailsByTag)
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
