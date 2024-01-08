const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const pg = require("pg");
const { addUser } = require("./src/command/user");
const { getUser } = require("./src/query/user")
const cors = require("cors");

const users = [];

app.use(cors())
app.use(bodyParser.json())

app.get("/user", async (req, res) => {
    try {
        const users = await getUser();
        res.send(users)
    } catch (e) {
        console.log(e);
    }
})

app.post("/user", async (req, res) => {
    try {
        const user = await addUser(req.body);
        console.log(user);
        res.send(201)
    } catch (e) {
        console.log(e);
    }
})



var PORT = 4000;

app.listen(PORT, () => {
    console.log(`server running ${PORT}`)
})
