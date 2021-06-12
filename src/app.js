const { json } = require('body-parser')
const express = require('express')
const notice = require('../models/notice')
const { Op } = require('sequelize')
const app = express()

app.use(express.json())
    //routes
    app.get('/', (req, res) => {
        return res.json({sucesso: true, message: 'i am running'})
    })

    app.post('/notice-create', async (require, response) => {
        const data = require.body
        const title = require.body.title
            const find = await notice.findAll({
                where: {
                    title: [title]
                }
            })
            if(find == ""){
                const save = await notice.create(data)
                .then(function(){
                    return response.json({sucesso: true, data})
                })
                .catch(function(err){
                    return response.json({sucesso: false, err})
                })
                }
                else
                 {
                     return res.json({sucesso: false, message: "Essa notícia já existe"})
                 }
            
    });
    app.get('/notice-all', async (req, res) => {
        const data = await notice.findAll()
            return res.json({data})
    })
    app.get('/notice-pk/:id', async (req, res) => {
        const id = req.params.id
        const search = await notice.findAll({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
        try{
            return res.json({sucesso: true, search})
        }
       catch(e){
            return res.status(400).json({sucesso: false, e})
       }   
    
        
    })
app.listen(8080, () => {
    console.log('Server Running')
})