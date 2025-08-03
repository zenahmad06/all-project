//import route handler
const productRouter = require('./routes/product');
const express = require('express');
const app = express();
// import mongoDb connected
const connectDB = require('./config/db');

connectDB();

//parsing json from frontend
app.use(express.json());

//route product
app.use('/api/products',productRouter);

//middleware  error

app.use((err,re,res,next) => {
    console.log(err.stack())
})


module.exports = app;
