const router = require('express').Router()
const controller = require('../controllers/contractorRequests')

router.post('/create', controller.createContractorRequest)
router.get('/all', controller.getAllContractorRequests)
router.get('/single/:id', controller.getContractorRequest)
router.delete('/delete/:id', controller.deleteContractorRequest)
router.get('/accept/:id', controller.acceptContractorRequest);
router.get('/reject/:id', controller.rejectContractorRequest);
router.put('/status', controller.updateContractorRequestStatus)

module.exports = router
