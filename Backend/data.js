const mongoose=require("mongoose")
const TableSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    img:String,
    title:String

})
const Data=mongoose.model("Netflixlogin",TableSchema)
module.exports=Data