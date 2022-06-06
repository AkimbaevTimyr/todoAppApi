const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: "ec2-3-211-221-185.compute-1.amazonaws.com",
    database: "tododb",
    password: '198305',
    port: 5432,
})


module.exports = pool