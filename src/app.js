const { json } = require('body-parser')
const express = require('express')
const { sucrase } = require('sucrase')
const db = require('../models/database/database')
const notice = require('../models/notice')
const app = express()

app.use(express(json))
app.use(express(sucrase))
    //routes
    app.get('/', (req, res) => {
        return res.json({sucesso: true, message: 'i am running'})
    })

    app.post('/create-notice', async (req, res) => {
        const data = req.body
            const save = await notice.create(data)
        .then(function(){
            return res.json({sucesso: true, data})
        })
        .catch(function(err){
            return res.json({sucesso: false, err})
        })
    })
app.listen(8080, () => {
    console.log('Server Running')
})