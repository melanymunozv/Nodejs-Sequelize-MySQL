
const Sequelize = require('sequelize')
const connection = new Sequelize('mysql://sequelize:1234@localhost:3306/sequelize')

const db={}
db.Sequelize=Sequelize
db.connection=connection

db.user=require("./User.model")(connection,Sequelize)
db.article=require("./Article.model")(connection,Sequelize)

db.user.hasMany(db.article,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
db.article.belongsTo(db.user)

db.connection.sync()

module.exports=db