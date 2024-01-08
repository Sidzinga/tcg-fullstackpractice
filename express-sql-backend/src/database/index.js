const { Pool } = require('pg');


// Replace these with your actual database connection details
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'company',
    password: 'tcg-pc1',
    port: 5432,
})




module.exports = { pool }