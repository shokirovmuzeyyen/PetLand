const { config } = require('dotenv')
config()
/*
module.exports = {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.SERVER_URL,
  SERVER_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,
}
*/

module.exports = {
  PORT: 8000,
  CLIENT_URL: "http://localhost:3000",
  SERVER_URL: "http://localhost:8000",
  SECRET: "secrosecrosecro",
}