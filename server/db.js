const Pool = require("pg").Pool;

const db = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "petland"
});

module.exports = db;