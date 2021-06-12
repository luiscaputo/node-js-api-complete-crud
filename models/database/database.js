const Sequelize = require('sequelize')

const sequelize = new Sequelize('simple_crud', 'root', '', {
  host: "localhost",
  dialect: 'mysql'
})
// sequelize.authenticate()
// .then(function(){
//   console.log('conectado')
// })
// .catch(function(err){
//   console.log('n connectado')
// })
module.exports = sequelize