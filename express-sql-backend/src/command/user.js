const { pool } = require("../database/index")

const addUser = async (userDetails) => {
    const { name, surname, email } = userDetails;
    const insertQuery = `INSERT into users (name, surname, email) values ($1, $2, $3) RETURNING *;`

    try {
        const user = await pool.query(insertQuery, [name, surname, email])
    } catch (e) {
        console.log(e)
    }
    // Perform the insertion

}


module.exports = { addUser }