import express from "express"
import { GetVerify, GLogin, Login, Register ,} from "../controller/UserControl.js"
const UserRoute = express.Router()

UserRoute.post("/register",Register)
UserRoute.post("/login",Login)
UserRoute.post("/Vcode",GetVerify)
UserRoute.post("/Glogin",GLogin)
export default UserRoute