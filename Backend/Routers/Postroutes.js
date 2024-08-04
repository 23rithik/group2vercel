const express = require('express');
const { verifyToken } = require('../Middleware/jwtMiddleware');
const { getsubmission, postsubmission,getId, getsubmissiondata } = require('../Controller/Submitcontroller');
const submitRouter = express.Router();

submitRouter.get('/api/wsubmitdata', verifyToken, getsubmission);
// submitRouter.put('/addsubmission', verifyToken, postsubmission);
submitRouter.post('/api/addsubmissiondata', verifyToken, postsubmission);
submitRouter.post('/api/getsubmissiondata', verifyToken, getsubmissiondata);

// submitRouter.get('/getid', verifyToken,getId)



module.exports = submitRouter;
