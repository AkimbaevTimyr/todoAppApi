require('dotenv').config()
const express = require('express')
const router = require('./routes/index') 
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router) 

const routes = app._router.stack.filter(r => r.route).map(r => r.route.path) 
console.log(routes)

app.listen(PORT, ()=> console.log('SERVER IS RUNNIG'))


