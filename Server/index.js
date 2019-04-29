const express = require('express')
const app = express()
cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
const sequelize = require('sequelize')

app.use(bodyParser.json())
app.use(cors())

var schedule = require('node-schedule');
 
schedule.scheduleJob({hour: 23, minute: 59}, function(){ //this function will update every night at midnight
    models.habits.findAll({
    })
    .then(results => {
        results.forEach(row => {
            if(row.daysCompleted + row.daysMissed < row.totalDays){
                if(row.completedFl){
                    models.habits.update(
                        {daysCompleted:row.daysCompleted + 1},
                        {where:{id:row.id}}
                        )
                }
                else{
                    models.habits.update(
                        {daysMissed:row.daysMissed + 1},
                        {where:{id:row.id}}
                        )
                }
            }
        })
    })
    .then(next => {
        models.habits.update(
            {completedFl: false},
            {where:{}}
        )    
    })
  });

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
    let totalDays = req.body.totalDays

    models.habits.build({
        habit:habit,
        commitment:commitment,
        startDate: startDate,
        endDate: endDate,
        totalDays: totalDays
    })
    .save()

})

app.get('/api/completed-habits', (req,res) => {
    let resultsSend = []
    models.habits.findAll({
        order: [['endDate', 'DESC']]
    })
    .then(results => {
        results.forEach(row => {
        if(row.daysCompleted + row.daysMissed >= row.totalDays){
            resultsSend.push(row)
        }
        })
    })
    .then(() => {
        res.json(resultsSend)
    })
})

app.post('/api/update-habit', (req,res) => {
    let id = req.body.id
    let completedFl = req.body.completedFl

    models.habits.update(
        {completedFl: completedFl},
        {where:{id:id}}
    )
})

app.listen(8080, () => {
    console.log('server running YAY!')
})