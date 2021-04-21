//sequelize.org/master/manual/model-querying-basics.html

const db = require('../models')
const User = require('../models/User.model')

let daoUsers={}


daoUsers.create=(user)=>{
    return new Promise((resolved)=>{
        db.user.create(user)
        .then(data=>resolved(data))
    })
}
daoUsers.find=()=>{
    return new Promise((resolved)=>{
        db.user.findAll({
            includes: [db.article, db.profile]
        }).then(data=>resolved(data))
    })
}
module.exports=daoUsers