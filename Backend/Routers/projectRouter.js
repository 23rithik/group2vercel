const express = require('express')
const { getProject, selectProject, displayProject, addProject } = require('../Controller/projectController')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const projectRouter = express.Router()



projectRouter.get('/api/getproject', verifyToken,getProject)
projectRouter.post('/api/selectproject',verifyToken,selectProject)
projectRouter.get('/api/displayproject',verifyToken,displayProject)
projectRouter.post('/api/addproject',addProject)



module.exports = projectRouter