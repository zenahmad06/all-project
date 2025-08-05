// import mongoose
const mongoose = require('mongoose')
// import schemas
const Countries = require('../models/Schemas')
// make asynchrnous function to save data to the local mongoDB

async function FetchSave() {

    try{
        await mongoose.connect('mongodb://localhost:27017/mydb') //connect to database`

        //fetch the data
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags');
        //get json
        const data = await response.json()
        //insert to the model
        await Countries.insertMany(data);

        //close connection
        mongoose.connection.close()
        
    }catch(e){
        console.log(e)
    }
}

//call function
FetchSave()