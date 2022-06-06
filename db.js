const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: "https://node-postgres-cloud.herokuapp.com/",
    database: "tododb",
    password: '198305',
    port: 5432,
})


module.exports = pool