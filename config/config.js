// require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_development',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0
  }
}
