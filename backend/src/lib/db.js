import mongoose from "mongoose"

export const connectDB = async  ()=>{
     try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB conn : ${conn.connection.host}`)
     } catch (error) {
        console.log(`MongoDB conn error: ${error}`)
     }
}