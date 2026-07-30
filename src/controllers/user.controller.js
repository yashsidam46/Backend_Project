import {apiErrors} from "../utils/apiErrors.js"
export {User} from "../models/user.model.js"
import {uploadAtCloudinary} from "../utils/cloudinary.js"
export const registerUser = (req, res) => {
  const {email,username,fullname,password} = req.body
  console.log("email : ",email);
  

if(
  [fullname,email,password,username].some((field) => 
    field?.trim() === "")
){
throw new apiErrors(400,"all field are require")
}

const existedUser = User.findOne({
  $or: [{username},{email}]
})

if(existedUser){
  throw new apiErrors(409,"user already exits")
}

const avatarLocalPth = req.files?.avatar[0]?.path

const CoverImageLocalPath = req.files?.coverImage[0]?.path;

if(!avatarLocalPth){
  throw new apiErrors(400,"avatar file is required")
}

};

//register a user 
//get user details from frontend
//username,gmail,name,
//validation -> not empty
//check if user already exist ir not
//check for avatar image 
//uplaod on claudnary,avatar
//create user object - create entry in db
//remove password and refresh token field from responce
//retrun responce