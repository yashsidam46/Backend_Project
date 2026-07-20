/*const asynHandler  = (requestHandler) => {
(req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((error) => {
        next(error)
    };
    )
}
}*/

    const asynHandler = (fn) => async (req,res,next) =>{
        try {
            
        } catch (error) {
            res.status(error.code || 500).json ({
                success : false,
                message : error.message
            })
        }
    }

//higher order function

export {asynHandler}