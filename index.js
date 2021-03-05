const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = require('./db')

const candidate = require('./controller/candidate-ctrl')

const test = require('./controller/test_score-ctrl')




const app = express()
const apiport  = 3000

app.use(bodyparser.urlencoded({exrended:true}))
app.use(cors())
app.use(bodyparser.json())


db.on('error',console.error.bind(console,'Mongodb connection error:'))

app.get('/',(req,res)=>{
    res.send('hello world')
})



app.get('/candidate',candidate)
app.get('/test',test)



app.listen(apiport,()=>console.log('server running on port '+apiport))