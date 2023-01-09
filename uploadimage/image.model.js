
const mongoose = require('mongoose')

require('dotenv').config
let schemaImage=mongoose.Schema({
    name: {
        type :String,
    require : true },
    image:{ data:Buffer,
     contentType:String 
    }
  
})

 

module.exports= ImageModel=mongoose.model('image',schemaImage)