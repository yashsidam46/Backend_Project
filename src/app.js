import experss from "express"
import cors from "cors"
import cookieParser  from "cookie-parser"
const app = experss()

app.use(corse({
    origin : process.env.CORS_ORIGIN,
    Credentials : true
}
))

app.use(experss.json({limit:"16kb"}))
//url data
app.use(experss.urlencoded({extended:true,limit:"16kb"}))

app.use(experss.static("public"))

app.use(cookieParser())



export { app }
//req params 
//req body 
//middleware -> (err,req,res,next)
//cookie-parser 
//corse 
//multer