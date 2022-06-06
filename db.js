const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: "107.22.57.98:443",
    database: "tododb",
    password: '198305',
    port: 5432,
})


module.exports = pool