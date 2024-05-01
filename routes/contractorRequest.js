const router = require('express').Router()
const controller = require('../controllers/contractorRequests')

router.post('/create', controller.createContractorRequest)
router.get('/all', controller.getAllContractorRequests)
router.get('/single/:id', controller.getContractorRequest)
router.delete('/delete/:id', controller.deleteContractorRequest)
router.put('/status', controller.updateContractorRequestStatus)

module.exports = router
