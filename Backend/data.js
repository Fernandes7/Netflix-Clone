const mongoose=require("mongoose")
const TableSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String

})
const Data=mongoose.model("Netflixlogin",TableSchema)
module.exports=Data