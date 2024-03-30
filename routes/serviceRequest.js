const router = require('express').Router();
const controller = require("../controllers/serviceRequest");

router.post('/create', controller.createServiceRequest)
router.get('/all', controller.getAllServiceRequests);
router.get('/single/:id', controller.getServiceRequest);

module.exports = router
