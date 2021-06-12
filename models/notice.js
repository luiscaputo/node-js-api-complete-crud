const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('./database/database')

const notice = db.define('notice', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  notice: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})
notice.sync()
module.exports = notice 