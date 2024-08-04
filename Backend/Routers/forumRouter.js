const express = require('express')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const { updatePost, deletePost, getPosts, postQuery, getId, postReply } = require('../Controller/postController')
const forumRouter = express.Router()


forumRouter.post('/api/postquery/:student_id',postQuery)
forumRouter.get('/api/getpost',verifyToken,getPosts)
forumRouter.delete('/api/deletepost/:post_id',deletePost)
forumRouter.patch('/api/updatepost/:post_id',updatePost)
forumRouter.get('/api/getid', verifyToken,getId)
forumRouter.post('/api/postreply/:post_id',verifyToken,postReply)



module.exports = forumRouter