const Pool = require('pg').Pool

const pool = new Pool({
    user: 'oohvmwzwanjqcj',
    host: "ec2-3-211-221-185.compute-1.amazonaws.com",
    database: "deng5ct6rpmd2l",
    password: 'bbbe731bd01f0bd5bf23732b17baf51d5d0aae57a12b6ff00c9309ee7f1dbfb1',
    port: 5432,
    ssl: {
        rejectUnauthorized : false,
    }
})


module.exports = pool
