const asynchandler = (callbackFunction) => {
    return async (req,res,next) => {
        try {
            await callbackFunction(req,res)
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = asynchandler