import { UserModel , DRUserModel } from "../model/UserModel.js";
import bcrypt from "bcrypt"
import { CreateToke } from "../middleware/CreateToken.js";
import nodemailer from "nodemailer";
export const Register = async (req,res)=>{
    try {
        
        const {email , password , name , sex ,role,specialist } = req.body
        if(!email || !password){res.json({mess:"Fill Full Details",status:"false"})}
        const FoundEmail = await UserModel.findOne({email}) || await DRUserModel.findOne({email})
        if(FoundEmail){res.json({mess:"User Already registered"})}
        // res.json({mess:"move",status:"true"})
        if(!name || !sex || !role){res.json({mess:"next move",status:"false"})}
        const HashPass = await bcrypt.hash(password,10);
        let token,user;
        if(role==="doctor"){
             user = await DRUserModel.create({
                email,name,sex,role,specialist,password:HashPass

            })

             token = CreateToke({id: user._id,
        email: user.email,
        role: user.role,})
            res.json({mess:"user created",st:"t",token,user})
                        // console.log(user)

        }else{
             user = await UserModel.create({
                email,name,sex,role,password:HashPass
            })
             token = CreateToke({
        id: user._id,
        email: user.email,
        role: user.role,
      })
            res.json({mess:"user created",token,user})
            // console.log(user)
        }


        
        } catch (error) {
        console.log(error)
    }
}

export const Login =async (req , res )=>{
    try {

        const {email,password} = req.body
        const emailFound = await UserModel.findOne({email}) || await DRUserModel.findOne({email})
        if(!emailFound){return res.json({mess:"User not found",st:"f"})}
        const vpass = await bcrypt.compare(password,emailFound.password)
        if(!vpass){return res.json({mess:"Wrong Password",st:"f"})}
        const token = CreateToke(emailFound.email)
        res.json({mess:"User Logged Success ful ",st:"t",token , emailFound})
        // console.log(emailFound)

    } catch (error) {
        console.log(error)
    }
}

export const GLogin =async (req , res )=>{
    try {

        const {email} = req.body
        const emailFound = await UserModel.findOne({email}) || await DRUserModel.findOne({email})
        if(!emailFound){return res.json({mess:"User not found",st:"f"})}
        const token = CreateToke(emailFound.email)
        res.json({mess:"User Logged Success ful ",st:"t",token , emailFound})

    } catch (error) {
        console.log(error)
    }
}
export const GetVerify = async(req,res)=>{
    try {
        const {email} = req.body
        let Vcode;
        let count;
        while(count!=6){
         Vcode =  Math.floor(Math.random()*1000000 + 42)
         count = Vcode.toString().length
        }
        console.log(Vcode)
        const SenderAuth = nodemailer.createTransport({
            service: "gmail",
        auth: {
            user: process.env.AUTH_EMAIL, 
            pass:  process.env.AUTH_PSS
        }
        })

        const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Hello from DR_Neuro",
        text: `vcode ${Vcode}`,
        html: `<b style="font-size:20px";>Verification code : ${Vcode}</b>`

        
    };

     SenderAuth.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
            const ress = info.response
            res.json({ress,Vcode})
        }
    });
    } catch (error) {
        console.log(error)
    }
}