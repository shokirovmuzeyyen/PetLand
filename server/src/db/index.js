const { Pool } = require('pg')
const pool = new Pool({
  user: 'jukxmvjmwjawqi',
  host: 'ec2-52-208-221-89.eu-west-1.compute.amazonaws.com',
  database: 'dcbcogbu1bjnl4',
  password: '652dc50927382af8ef8cdb95d2bc9bab85bc165b12330d5254192b8ad0858faa',
  port: 5432,
  ssl: { rejectUnauthorized: false }
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
