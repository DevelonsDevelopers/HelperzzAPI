const router = require('express').Router()
const controller = require('../controllers/contractors')
const detailsController = require('../controllers/contractorDetails')

router.post('/create', controller.createContractor)
router.post('/createDetails', detailsController.createContractorDetails)
router.put('/updateDetails', detailsController.updateContractorDetails)
router.get('/details/:id', controller.getContractorDetails)
router.get('/all', controller.getAllContractors);
router.get('/single/:id', controller.getContractor);
router.get('/allActive', controller.getAllActiveContractors);
router.get('/featured', controller.getFeaturedContractors);
router.put('/update', controller.updateContractor)
router.delete('/delete/:id', controller.deleteContractor);
router.put('/status', controller.updateContractorStatus)
router.put('/featured', controller.updateContractorFeatured)

module.exports = router;
