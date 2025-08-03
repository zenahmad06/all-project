
const AsyncHandler = (functionRoute) => {
    return async function(req,res,next){
        try {
            await functionRoute(req,res)
            
        } catch (error) {
            //go to middleware error
            next(error)
            
        }
    }
}

module.exports = AsyncHandler;