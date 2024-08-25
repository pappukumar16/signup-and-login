const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = (req,res,next)=>{

    try {

        const token = req.body.token

        if(!token){
            res.status(401).json({
                success:false,
                message:"Token missing",
            })
        }

        //veryfy the token
        
        try {

            const payload = jwt.verify(token,process.env.JWT_SECRET)
            console.log(payload)
            req.user = payload
            
        } catch (error) {
            console.log(error)
            res.status(403).json({
                success:false,
                message:"Varification of token fail "
            })
        }

        next()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal surver errror",
            message:message.error
        })
    }
}

//is student protected route
exports.isStudent = (req,res,next)=>{

     try {
        if(req.user.role !== "Student"){
            return res.status(403).json({
                success:false,
                message:"This is protected rote for Studnet"
            })
        }

        next()
     } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"User route do not matching"
        })
     }

}

//this is for admin route
exports.isAdmin = (req,res,next)=>{
    try {
        if(req.user.role !== "Admin"){
            return res.status(403).json({
                success:false,
                message:"This is protected rote for admin"
            })
        }

        next()
     } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"User route do not matching"
        })
     }

}