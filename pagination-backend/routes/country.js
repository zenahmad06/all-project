//import express
const express = require('express');
// router
const router = express.Router();
const asynchandler = require('../utils/asynchandler')
//schemas
const Countries = require('../models/Schemas');
//route
router.get('/search',asynchandler(async function(req,res) {
   // akses query
   const query = req.query;
   if(Object.values(query).length == 0){
    return res.status(400).json({message:'query tidak ditemukan'})
   }
   const filter = {}
   Object.keys(query).forEach((item) => {
    if(item == 'q'){
        filter['name.common'] = {$regex:query.q,$options:'i'}
    }
   })
   // hitung hasil pencarian semua menggunakan countDocument
   const totalData = await Countries.countDocuments(filter)
   
   //pagintaion, if user pass the page query in url we use page or default 1 
   //separate page filtering and search filtering if we wannt use  await Countries.find(filter)
   //convert to number
   const page = parseInt(query['page']) || 1;
   //limit we define default 10
   const limit = 10
   //startpage ini berarti rumusnya (page-1) * limit page 1 dimulai  0  page 2 dimulai index 10
   const startItem = (page - 1) * limit
   //we subset the data using skip and limit
   //we use skip for start item
   const searchData = await Countries.find(filter)
        .skip(startItem) //subset data dimulai dari data ke -
        .limit(limit)

    if(searchData.length == 0){
        return res.status(404).json({message: "data tidak ditemukan"})
    } 
    //return hasilya
    return res.json({
        data:searchData,
        page,
        limit,
        totalPage:Math.ceil(totalData/limit)
    })

}))

module.exports = router