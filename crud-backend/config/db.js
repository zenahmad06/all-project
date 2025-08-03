//import mongoose
const mongoose = require('mongoose');

//buat async fungsi untu konnect db
//yang butuh proses di luar kode itu harus menggunakan asynchronus ya
const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/product_db')
        console.log('MongoDb conneted')
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDB
