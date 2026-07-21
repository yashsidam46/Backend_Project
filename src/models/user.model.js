import mongoose,{Schema} from "mongoose";

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
passoword : {
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

export const user = mongoose.model("User",userSchema)