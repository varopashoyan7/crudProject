const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  lastname:{type:String,required: true},
  phone:{type:String,required:true},
  location:{type:String,required:true},
  nationality:{type:String,required:true},
  picture: {type:String,required:true},
  dob:{type:String,required:true},
})

module.exports = model('Contact', schema)
