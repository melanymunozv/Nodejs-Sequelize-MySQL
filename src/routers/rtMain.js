const express=require('express')
const daoUsers = require('../dao/daoUsers')
const rtMain=express.Router()

rtMain.get('/',(req,res)=>{
    res.json({response:'ok'})
})

rtMain.post('/create', (req,res)=>{
    console.log(req.body)
    daoUsers.create(req.body)
    .then(data=>res.json(data))
})

rtMain.get('/findAll',(req,res)=>{
    daoUsers.find()
    .then(data=>res.json(data))
})
module.exports=rtMain