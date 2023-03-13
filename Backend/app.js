const express=require("express")
const mongoose=require("mongoose");
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const Data=require("./data")
mongoose.set('strictQuery', true)
port=3001
app.post("/signin",(req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const pass=req.body.pass
    console.log(req.body)
    Data.findOne(({Name:name})).then((find)=>{
    if(!find)
    {
    const data=new Data({Name:name,Email:email,Password:pass})
    data.save()
    res.send("success")
    }
    else
    res.send("fail")
    })
})
app.post("/login",(req,res)=>{
    const name=req.body.name
    const pass=req.body.pass
    console.log(name,pass)
    Data.findOne(({Name:name})).then((responce)=>{
        if(responce)
        {
            if((responce.Password==pass))
            res.send(responce)
            else
            res.send("PI")
        }
        else
        res.send("NU")
    })
})
app.listen(port,(req,res)=>{
    console.log("Connected to server")
})
mongoose.connect("mongodb+srv://Ferno:123@cluster0.wqriud4.mongodb.net/Netflix",{useNewUrlParser:true}).then(()=>console.log("Connected To Database"))