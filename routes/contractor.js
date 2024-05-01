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
router.delete('/deleteAffiliation/:id', affiliationsController.deleteAffiliation)
router.delete('/deleteAward/:id', awardsController.deleteAward)
router.delete('/deleteBadge/:id', badgesController.deleteBadge)
router.delete('/deleteReview/:id', reviewsController.deleteReview)
router.delete('/deleteProject/:id', projectsController.deleteProject)
router.delete('/deleteDocument/:id', documentsController.deleteDocument)
router.delete('/unAssignArea/:id', areasController.deleteArea)
router.delete('/unAssignHighlight/:id', highlightsController.deleteHighlight)
router.delete('/unAssignLanguage/:id', languagesController.deleteLanguage)
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
router.get('/filters', controller.getFilters)

module.exports = router;
