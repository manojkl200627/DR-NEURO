import jwt from "jsonwebtoken";

export const CreateToke = (t)=>{

   return  jwt.sign(t,process.env.JWT_SECRET)

} 