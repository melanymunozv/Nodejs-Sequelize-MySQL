require('dotenv').config()
const express=require('express')
const app = express()



//conexion a la bd
const DB = require('./models')
DB.connection.authenticate()
    .then(()=>console.log("Conexión con MySQL OK!"))
    .catch((err)=>console.log(":( Error en MySQL",err))


app.listen(8081,(err)=>{
    if(err) console.log("Hay errores: ",err)
    console.log("Server run on port 8081")
})