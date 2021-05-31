// import { json } from 'express'
import express  from 'express'
import model from 'src/model'
import { message } from 'statuses'

const express = require('express')



const app = express()

app.get('/user', (req, res) => {
    res.send('Testando')
})

app.listen(8888)
