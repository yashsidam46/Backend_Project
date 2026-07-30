import {apiErrors} from "../utils/apiErrors.js"
export {User} from "../models/user.model.js"
import {uploadAtCloudinary} from "../utils/cloudinary.js"
import { User } from "./user.controller.js";
import { ApiResponce } from "../utils/Apiresponce.js";
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

const avatar = await uploadAtCloudinary(avatarLocalPth) 
const coverimage = await uploadAtCloudinary(CoverImageLocalPath)

if(!avatar){
  throw new apiErrors(409,"avatar is required")
}

const user = User.create({
  fullname,
  avatar : avatar.url,
  coverimage : coverimage?.url || "",
  email,
  password,
  username : username.toLowerCase()
})

const CreatedUser = await User.findById(user._id).select(
  "-password -refreshToken"
)

if(!CreatedUser){
  throw new apiErrors(500,"something went wrong while  registrering user")
}


return res.status(201).json(
  new ApiResponse(200,CreatedUser,"user created successfully")
)

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