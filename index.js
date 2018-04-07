const express = require('express')
const app = express()
const server = require('http').Server(app);


// app.use((req,res,next)=>{
//     res.sendFile(__dirname+'/views')
//     next()
// })


app.use(express.static(__dirname+'pephtml'))

server.listen(1337, () => console.log('Example app listening on port 1337!'))