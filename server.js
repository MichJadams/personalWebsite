import express from "express";

app = express();

app.get('/',(req,res,next)=>{
    res.send("hello world ")
})

app.use(express.static('public'))

app.listen(1337, () => console.log('Example app listening on port 1337!'))