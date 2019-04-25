const express = require('express')
const app = express()
cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
const sequelize = require('sequelize')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    models.habits.findAll({
        order:sequelize.col('id')
    })
    .then(habits =>{
        res.json(habits)
    })
})


app.post('/api/add-habit', (req,res) => {
    let habit = req.body.habit
    let commitment = req.body.commitment
    let startDate = req.body.startDate
    let endDate = req.body.endDate

    models.habits.build({
        habit:habit,
        commitment:commitment,
        startDate: startDate,
        endDate: endDate
    })
    .save()

    console.log('added')
})

app.listen(8080, () => {
    console.log('server running YAY!')
})