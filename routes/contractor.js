const router = require('express').Router()
const controller = require('../controllers/contractors')
const detailsController = require('../controllers/contractorDetails')
const seoController = require('../controllers/contractorSeo')
const awardsController = require('../controllers/contractorAwards')
const affiliationsController = require('../controllers/contractorAffiliations')
const badgesController = require('../controllers/contractorBadges')
const reviewsController = require('../controllers/contractorReviews')
const projectsController = require('../controllers/contractorProjects')
const areasController = require('../controllers/contractorAreas')
const highlightsController = require('../controllers/contractorHighlights')
const languagesController = require('../controllers/contractorLanguages')
const documentsController = require('../controllers/contractorDocuments')

router.post('/join', controller.joinContractor)
router.post('/create', controller.createContractor)
router.post('/createDetails', detailsController.createContractorDetails)
router.put('/updateDetails', detailsController.updateContractorDetails)
router.post('/createSeo', seoController.createContractorSeo)
router.put('/updateSeo', seoController.updateContractorSeo)
router.get('/popular', detailsController.getPopularContractors)
router.get('/recent', detailsController.getRecentContractors)
router.get('/gallery/:contractor', projectsController.getGallery)
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
router.get('/tag/:tag', controller.getContractorByTag)
router.get('/details/:id', controller.getContractorDetails)
router.get('/detailsTag/:tag', controller.getContractorDetailsByTag)
router.get('/all', controller.getAllContractors);
router.get('/single/:id', controller.getContractor);
router.get('/allActive', controller.getAllActiveContractors);
router.get('/allAssigned/:request', controller.getAllAssignedContractors);
router.post('/category/:category', controller.getContractorsByCategory);
router.post('/cityCategory/:category', controller.getContractorsByCityCategory);
router.post('/subcategory/:subcategory', controller.getContractorsBySubcategory);
router.get('/featured', controller.getFeaturedContractors);
router.put('/update', controller.updateContractor)
router.delete('/delete/:id', controller.deleteContractor);
router.put('/status', controller.updateContractorStatus)
router.put('/featured', controller.updateContractorFeatured)
router.post('/approve/:id', controller.approveContractor)
router.post('/reject/:id', controller.rejectContractor)
router.post('/check', controller.checkEmailCompany)
router.get('/filters', controller.getFilters)

module.exports = router;
