const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 5000
var cors = require('cors')

require("./config/database").connectdb()

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

 app.use(cors(corsOptions))




 
app.use(express.json())
const router = require("./routes/user")
app.use("/api/auth",router)

app.listen(PORT,()=>{
    console.log("App is running on port ",PORT)
})

app.use("/", (req,res)=>{
      res.send(`Server is going on ${PORT}`)
})

