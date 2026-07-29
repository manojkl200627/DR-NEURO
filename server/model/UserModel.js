import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{type:String,unique: true,
    required: true},
    name:{type:String,
    required: true},
    password:{type:String,
    required: true},
    sex:{type:String,
    required: true},
    role:{type:String,
    required: true},
    doctors:{type:[String]},
    medicine:{type:[{
         disease:{type:String},
         tablets:{type:[String]},
         
                    }
                ]
       },
    extra:{type:[String]},
    appointment:{type:[String]},
},{ timestamps: true })


const DRUserSchema = mongoose.Schema({
    email:{type:String,unique: true,
    required: true},
    name:{type:String,
    required: true},
    password:{type:String,
    required: true},
    specialist:{type:String,
    required: true},
    sex:{type:String,
    required: true},
    role:{type:String,
    required: true},
    pasient:{type:[String]},
    extra:{type:[String]},
    active:{type:Boolean,default:false},
},{ timestamps: true })

export const UserModel = mongoose.model("user",UserSchema)
export const DRUserModel= mongoose.model("druser",DRUserSchema)