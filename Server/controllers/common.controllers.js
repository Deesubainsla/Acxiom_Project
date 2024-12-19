import Admin from "../models/Admin.model.js";
import User from "../models/User.model.js";
import Vender from "../models/Vender.model.js";
import wrapper from "../utils/trycatchwrapper.js";
import { error } from "../middlewares/error.middleware.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const cookieoption = {
    maxAge: 15*24*60*60*1000 ,//15 days
    secure: true,//only sharable on https
    httpOnly: true,//only access by http req not by javaScript
    sameSite:"none", //to allow cross-origin
    // path:'/'
};

const login = wrapper(async(req,res)=>{

    const {email, password, role} = req.body;
    var user;

    if(!email || !password || !role){
        throw new error('Invalid details',401);
    }

    if(role == 'Admin'){
        user = await Admin.findOne({email});
    }
    else if(role == 'Vender'){
        user = await Vender.findOne({email});
    }
    else if(role == 'User'){
        user = await User.findOne({email});
    }

    if(!user){
        throw new error("User not found",401);
    }

    const ismatch = await bcrypt.compare(password,user.password);
    if(!ismatch){
        throw new error("Password is incorrect",401);
    }

    const token = jwt.sign({id:user._id, role}, process.env.jwt_secret);



    res.status(200)
    .cookie('acxiomuser',token,cookieoption)
    .json({message:"User loggedin successfully", user})

})

const signin = wrapper(async(req,res)=>{
    const {name, email, password, role, category} = req.body;

    var newuser;

    if(role == 'Vender'){
        if(category == ""){
            throw new error("Category is compulsory with Vender",401);
        }

        const hashpassword = await bcrypt.hash(password,10);

        newuser = await Vender.create({
            name,
            email,
            password: hashpassword,
            category
        })

    }

    if(role == 'User'){

        const hashpassword = await bcrypt.hash(password,10);
        newuser = await User.create({
            name,
            email,
            password: hashpassword
        })
    }

    if(!newuser){
        throw new error("Error in Signin",401);
    }

    const token = jwt.sign({id:newuser._id, role}, process.env.jwt_secret);

    res.status(200)
    .cookie('acxiomuser',token,cookieoption)
    .json({message:'Signin successfull', newuser})
})

const logout = wrapper(async(req,res)=>{

    const {id:userid , role} = req.user;
    if(!userid || !role){
        throw new error("User is not authenticated",401);
    }
    var user;
    
    if(role == 'Admin'){
        user = await Admin.findOne({_id:userid});
    }
    if(role == 'Vender'){
        user = await Vender.findOne({_id:userid});
    }
    if(role == 'User'){
        user = await User.findOne({_id:userid});
    }

    
    if(!user){
        throw new error('User is not present for logout',401);
    }

    res.status(200)
    .clearCookie('acxiomuser')
    .json({message:"User logout successfully", user})
})

export {login, signin, logout}


