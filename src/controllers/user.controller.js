export const registerUser = (req, res) => {
  res.status(200).json({
    message: "user registered !!!!!",
  });
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