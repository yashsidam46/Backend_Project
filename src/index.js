//import dotenv from "dotenv"

//import connectDb from "./db/index.js";

//dotenv.config()
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

dotenv.config();

const app = express();

/*

(async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log("✅ MongoDB Connected");
        console.log(connectionInstance.connection.host);

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("MongoDB Error:", error);
    }
})();






*/

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) =>{
               console.log("ERROR : ",error);
                throw error
            })
            app.listen(process.env.PORT,() =>{
                console.log(`App is listing On ${process.env.PORT}`);
                console.log("MONGODB CONNECTE !!");
                
            })
    } catch (error) {
        console.log("ERROR : ", error)
    }
})()
    