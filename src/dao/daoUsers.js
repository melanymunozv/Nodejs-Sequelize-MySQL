//sequelize.org/master/manual/model-querying-basics.html

const db = require('../models')
const User = require('../models/User.model')

let daoUsers={}


daoUsers.create=(user)=>{
    return new Promise((resolved)=>{
        db.user.create()
        .then(data=>resolved(data))
        .catch()
    })
}

module.exports=daoUsers