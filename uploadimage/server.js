const express =require('express')
const cors= require('cors')
const app= express()
const port = 4000;
const multer= require ('multer')

const storage = multer.diskStorage({
destination:'./',
filename: function(req, file, cb){
cb(null,Date.now()+'.'+file.mimetype.split('/')[1])
}
})

const upload= multer({storage: storage})

app.use(cors());
app.post('/',upload.single('file'),(req,res)=>{})
app.listen(port,()=>console.log(`listening on port ${port}`))