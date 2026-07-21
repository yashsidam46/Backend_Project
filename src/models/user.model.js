import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true,
    index : true
},
email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
},
fullname : {
type : String,
required : true,
trim : true,
index : true
},
coverImage : {
    type : String
},
avatar : {
    type : String,
required : true
} , 
password : {
type : String,
required : [true , "password is required"]
},
WatchHistory : [
    {
        type : Schema.Types.ObjectId,
        ref : "Video"
    }
],
refreshToken : {
    type: String
}

}, {timestamps : true})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

this.password = bcrypt.hash(this.password, 10)
next()
})

userSchema.methods.isPasswordCorrect = async function (password) 
{
 return await bcrypt.compare(password,this.password)    
}

export const user = mongoose.model("User",userSchema)