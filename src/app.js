const { json } = require('body-parser')
const express = require('express')
const { sucrase } = require('sucrase')
const db = require('../models/database/database')
const app = express()

app.use(express(json))
app.use(express(sucrase))
    //routes
    app.get('/', (req, res) => {
        return res.json({sucesso: true, message: 'i am running'})
    })
app.listen(8080, () => {
    console.log('Server Running')
})