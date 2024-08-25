const mongoose = require("mongoose")
require("dotenv").config();
const baseUrl = process.env.MONGODB_URI;

exports.connectdb = async()=>{

    mongoose.connect(baseUrl,{})
    .then( ()=>{console.log("databse connection successful")})
    .catch( (err)=>{
        console.log(err)
        console.log("database connection unsuccessful")})
}
