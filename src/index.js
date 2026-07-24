//import dotenv from "dotenv"

//import connectDb from "./db/index.js";

//dotenv.config()

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js"; // ✅ Import the configured app from app.js!

dotenv.config({ path: "./.env" });

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on ${process.env.PORT}`);
            console.log("MONGODB CONNECTED !!");
        });
    } catch (error) {
        console.log("ERROR : ", error);
    }
})();
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

