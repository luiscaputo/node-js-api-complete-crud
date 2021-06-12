const { json } = require('body-parser')
const express = require('express')
const { sucrase } = require('sucrase')
const db = require('../models/database/database')
const notice = require('../models/notice')

const app = express()

app.use(express.json())
    //routes
    app.get('/', (req, res) => {
        return res.json({sucesso: true, message: 'i am running'})
    })

    app.post('/create-notice', async (require, response) => {
        const data = require.body
            const save = await notice.create(data)
        .then(function(){
            return response.json({sucesso: true, data})
        })
        .catch(function(err){
            return response.json({sucesso: false, err})
        })
    });
    app.post('/create', async (req, res) => {
        const data = req.body
        return res.json({data})
    })
app.listen(8080, () => {
    console.log('Server Running')
})