const express = require('express')
const connectDb = require("./src/connection");

const { PORT = '80' } = process.env
const app = express()

app.use((req, res, next) => {
    res.send('Hello Jhony!!!!!!!!')
})

app.listen(PORT)