import { v2 as claodinary} from "cloudinary";
import fs from"fs"

claodinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECREATE
})