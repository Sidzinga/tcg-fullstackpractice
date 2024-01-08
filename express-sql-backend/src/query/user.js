const { pool } = require("../database/index")

const getUser = async () => {
    const insertQuery = `SELECT * from users;`

    try {
        const users = await pool.query(insertQuery)
        console.log(users)
        return users.rows;
    } catch (e) {
        console.log(e)
    }
    // Perform the insertion

}


module.exports = { getUser }