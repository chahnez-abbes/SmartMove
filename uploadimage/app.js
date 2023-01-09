const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smartmove',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const multer = require('multer');
const imageModel = require('./image.model');
require('dotenv').config()

const binaryData = 'binary data';
const image = new Buffer(binaryData, 'binary');


// storage


const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,Date.now+file.originalname);
    }
})

const upload =multer({
    storage:Storage
}).single('testImage')

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
      if(err){
        console.log(err)
      }
      else {
        const newImage = new imageModel({
          name: req.body.name,
          image:{
            data: req.file.filename,
            contentType:'image/png'
          }
          
        })  
        newImage.save()
        .then(()=>res.send('succefully uploded'))
        .catch(err=>console.log(err))
      }  
    })

  
})
app.get('/', async (req,res)=>{
  const allData= await imageModel.find()
  res.json(allData)
})





module.exports = app;