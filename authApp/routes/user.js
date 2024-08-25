const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/Auth")
const {auth,isStudent,isAdmin} = require("../middlewalers/Auths")


router.post("/login",login)
router.post("/signup",signup)

router.get("/test",auth , (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to testing route"
    })
})

router.get("/isStudent",auth,isStudent , (req,res)=>{
    res.json({
        success:true,
        message:"welcome to student router"
    })
})

router.get("/isAdmin",auth,isAdmin, (req,res)=>{
    res.json({
        success:true,
        message:"Welecome to admin route"
    })
})

module.exports = router


