
import jwt from 'jsonwebtoken'
import { error } from './error.middleware'

const Authenticated = (req,res,next)=>{

    const token = req.cookies.acxiomuser;
    if(!token){
        throw new error("Not Authenticated user:",401);
    }

    const userinfo = jwt.verify(token, process.env.jwt_secret);
    req.user = userinfo;

    next();

}

export default Authenticated;