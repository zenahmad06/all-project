const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        console.log('MongoDB connected')
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDB;