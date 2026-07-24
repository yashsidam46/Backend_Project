import { v2 as claodinary} from "cloudinary";
import fs from"fs"

claodinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECREATE
})

const uploadAtCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
       const responce = await claodinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        console.log("file uploaded on cloudinary",responce.url);
        return responce;

    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved 
        //temp file as the upload operation got failed
    }
}
export {uploadAtCloudinary}