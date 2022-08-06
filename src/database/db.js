const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("database", "user", "password", {
  dialect: "sqlite",
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  host: "./database.sqlite",
})

module.exports = sequelize
