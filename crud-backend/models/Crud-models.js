// import the mongoose
const mongoose = require('mongoose')

// using Schema, we werite this
const {Schema} = mongoose

// set the structure and data type
const crudSchema = new Schema({
    //name
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    times:{
        type:Date,
        //otomatis generate Date
        default: Date.now
    },
    status:{
        type:Boolean,
        required:true
    }
})

//export the model from the schema
module.exports = mongoose.model('Product',crudSchema)