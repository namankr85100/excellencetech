const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Candidate = new Schema(

    {
        name:{type:String ,required : true},
        email : {type : String , required : true},
        address:{type:String , required:false},

    },
    {timestamps:true},
)

module.exports = mongoose.model('Candidate',Candidate)