const Sequelize = require('sequelize')

const sequelize = new Sequelize('simple_crud', 'root', '', {
  host: "localhost",
  dialect: 'mysql'
})

export default sequelize