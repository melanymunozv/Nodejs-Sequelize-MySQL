const express=require('express')
const rtMain=express.Router()

rtMain.get('/',(req,res)=>{
    res.json({response:'ok'})
})

module.exports=rtMain