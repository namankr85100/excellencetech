const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Test_score = new Schema(
    {
        first_round :{type:String},
        second_round:{type:String},
        third_round:{type:String}
    },
    {timestamps:true},
)
module.exports = mongoose.Schema('Test_score',Test_score)