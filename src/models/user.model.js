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

},
coverImage : {

},
avatar : {

} , 
passoword : {

},


})

export const user = mongoose.model("User",userSchema)