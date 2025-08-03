// import asynchandler
const AsyncHandler = require('../utils/AsyncHandler')
//import express
const express = require('express')
//import route from router
const route = express.Router()

// import model
const Products = require('../models/Crud-models')
//handle submiting data
route.post('/',AsyncHandler(async(req,res) => {
    // get value in the req.body keyname in the request object
    const {name,quantity,status} = req.body

    // atau bisa ditulis
    // const name = req.body.name, etc

    // check apakah kosong atau tidak
    if(!name || !quantity || !status){
        return res.status(400).json({message:'Data tidak boleh kosong'}) // di handle di res.ok
    }
    //jika quantitiy data typenya bukan number, convert dulu ke Number krn dr req.body itu string
    //jika ISNan tru which is bentuk string datanya karena NAN not as number maka error
    if (isNaN(Number(quantity))){
        return res.status(400).json({message:"data type tidak benar"})
    }

    // masukan data ke database, convert quantity
    const addData = new Products({name,quantity:Number(quantity),status})
    await addData.save()

    //atai bisa ditulis
    // await Product.create({name,quantity,status})

    //ngirim response
    return res.status(201).json({message:'data berhasil ditambahkan'})

}))

// route handler get
route.get('/',AsyncHandler(async(req,res) => {
    // menggunakan find
    const data = await Products.find();
    //send to the user
    return res.status(200).json(data)
}))

//route handler for update we use put method
route.put('/update/:id',AsyncHandler(async(req,res) => {
    //get params in url above
    const {id} = req.params
    if(!id){
        return res.status(400).json({message:"not found"})
    };
    //get data we want update from body
    const {name,quantity,status} = req.body
    // sttaus bollean biar false value tetep kebaca
    if(!name || !quantity || status == undefined){
        return res.status(400).json({message:"data cant empty"})
    };

    //find in database
    //if found return object if not return null
    const searchData = await Products.findOne({_id:id});
    //if not found
    if(!searchData){
        return res.status(404).json({message:'not found'})
    };

    //update
    searchData.name = name;
    searchData.quantity = quantity;
    searchData.status = status;

    //jangan lupa di save

    await searchData.save()

    return res.status(200).json({message:'berhasil diupdate'})
}))

// route delete
route.delete('/:id',AsyncHandler(async(req,res) => {
    // accees params
    const {id} = req.params;
    if(!id){
        return res.status(400).json({message:'id empty'})
    }
    //find first
    const searchData = await Products.findOne({_id:id});
    if(!searchData){
        return res.status(404).json({message:'data not found'})
    }
    // delete using deleteOne
    await Products.deleteOne({_id:id});
    // return status
    return res.status(200).json({message:"deleted succes"});

}))
module.exports = route