const express = require('express')

const app = express()
// intiate the listen function to make request from the brouther
app.listen(3000)

app.get('/',(req,res)=>{
    res.send('this is the first express app')
})


app.get('/about',(req,res)=>{
    res.send('this is the about page')
})