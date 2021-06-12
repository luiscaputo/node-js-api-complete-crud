// import { json } from 'express'
const { json } = require('express')
const express = require('express')
const app = express()

app.use(express(json))
app.get('/user', (req, res) => {
    return res.json({sucesso: true, message: "RUNING"})
})

app.listen(8080, () =>{
    console.log('Server Running')
})
