const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./DB/mongoDB')

const app = express()
app.use(express.json());
app.use(cors({
  origin:"https://group2vercel-frontend.vercel.app",
  credentials:true,
  methods:['POST','GET','DELETE','PUT','PATCH']
}));
app.use('/uploads', express.static('Uploads'));
// app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

const authRouter = require('./Routers/authRouter');
const projectRouter = require('./Routers/projectRouter')
const referenceRouter = require('./Routers/referenceRouter')
const forumRouter = require('./Routers/forumRouter')
const submitRouter = require('./Routers/Postroutes');

app.use('/api', authRouter);
app.use('/api', projectRouter);
app.use('/api', referenceRouter)
app.use('/api', forumRouter)


// app.get('/*',function(req,res){res.sendFile(path.join(__dirname,'../Frontend/index.html'));});

app.use('/api', submitRouter);

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})