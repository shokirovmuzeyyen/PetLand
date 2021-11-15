const { config } = require('dotenv')
config()

module.exports = {
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL || https://petland-app.herokuapp.com/,
  CLIENT_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,
}
