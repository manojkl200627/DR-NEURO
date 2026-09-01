import express from "express"
import cors from "cors"
import "dotenv/config"

import ConnectDB from "./config/DBconnect.js"
import UserRoute from "./routes/userRoute.js"
const app = express()
app.use(cors({
    origin:["*"]
}))
app.use(express.json())

const port = process.env.PORT
ConnectDB()
app.use("/api/user",UserRoute)
app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>console.log("running",port))
