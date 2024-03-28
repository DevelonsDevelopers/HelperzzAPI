const router = require('express').Router();
const controller = require("../controllers/serviceRequest");

router.post('/create', controller.createServiceRequest)
router.get('/all', controller.getAllServiceRequests);

module.exports = router
