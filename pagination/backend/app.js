const express = require('express');
;
const logger = require('morgan');

const connectDB = require('./config/db')
const CountriesRoute = require('./routes/country')
const app = express();

//install cors
const cors = require('cors');


//connect first
connectDB();

app.use(cors())

app.use(logger('dev'));
//parsing json
app.use(express.json());


app.use('/api/countries', CountriesRoute);


app.use((err,req,res,next) => {
    console.log(err.stack)
})

module.exports = app;
