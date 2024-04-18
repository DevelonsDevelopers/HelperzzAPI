const router = require('express').Router();
const controller = require("../controllers/serviceRequest");

router.post('/create', controller.createServiceRequest)
router.get('/all', controller.getAllServiceRequests);
router.get('/recent', controller.getRecentServiceRequests);
router.get('/single/:id', controller.getServiceRequest);
router.get('/accept/:id', controller.acceptRequest);
router.get('/reject/:id', controller.rejectRequest);
router.delete('/delete/:id', controller.deleteRequest);

module.exports = router
