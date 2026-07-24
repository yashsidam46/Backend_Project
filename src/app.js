import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Temporary test route
app.post("/test", (req, res) => {
  res.send("POST to /test works!");
});

// Import user router
import userRouter from "./routes/user.routes.js";

// Mount user routes
app.use("/api/v1/users", userRouter);

export { app };
//req params 
//req body 
//middleware -> (err,req,res,next)
//cookie-parser 
//corse 
//multer