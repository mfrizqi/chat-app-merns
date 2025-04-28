import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({message : 'Unauthorized Access'})
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(!decode){
            return res.status(401).json({message : 'Unauthorized Access'})
        }

        const user = await User.findById(decode.userId).select("-password")
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        req.user = user

        next()

    } catch (error) {
        console.log(`Err: auth middelware ${error}`)
        return res.status(500).json({message: "User not found"})
    }
}