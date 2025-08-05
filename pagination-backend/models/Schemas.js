const mongoose = require('mongoose')
//import schemas
const {Schema} = mongoose

//make schemas
const CountrySchemas = new Schema({
    name:{
        common:String
    },
    capital:[String],
    region:String,
    subregion:String,
    population:Number,
    area:Number,
    flags:{
        png:String
    }
})

//make model
module.exports =  new mongoose.model('Country',CountrySchemas);