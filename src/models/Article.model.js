module.exports = (connection, Sequelize) => {
    const Article = connection.define("articles", {
      title: {type: Sequelize.STRING},
      text: {type: Sequelize.STRING},
      state:{
          type: Sequelize.ENUM,
          values: ['unpublished','published','deleted']
      }
    })
    return Article
}