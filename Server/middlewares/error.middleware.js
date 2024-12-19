const errormiddleware = (err, req, res, next)=>{

    err.message ||= "Error in serverside error middleware";
    err.statuscode ||= 500;

    res.status(err.statuscode).json({
        success: false,
        message: err.message
    })

}

class error extends Error{
    constructor(msg,statuscode){
        super(msg),
        this.statuscode = statuscode
    }
}


export {errormiddleware, error}