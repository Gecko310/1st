const express = require('express')
const app= express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    console.log("OK")
    res.render('vet',{text:"con vet"})
})

const userRouter = require('./routes/users')


app.use('/users',userRouter)



app.listen(3000) 