const path = require('path')
const express = require('express')
const bodyParser = require('body-parser ')

let app = express()
module.exports = app
//boyd parsing middlewear
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//static middle wear 
app.use(express.static(path.join(root,'./public')))

//routing

app.use('/api',require('/routes'))

let PORT = process.env.PORT || 1337;

app.use(express.static(__dirname+'pephtml'))

const server = require('http').Server(app);
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))




