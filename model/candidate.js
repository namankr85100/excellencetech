const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Candidate = new Schema(

    {
        name:{type:String ,required : true},
        email : {type : String , required : true},
        address:{type:String , required:false},
        test_scores:{
                        type:Schema.Types.ObjectId,
                        ref:"Test_Score"                
                    }

    },
    {timestamps:true},
)

module.exports = mongoose.model('Candidate',Candidate)