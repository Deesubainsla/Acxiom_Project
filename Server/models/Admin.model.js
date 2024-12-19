import mongoose from "mongoose";

const Adminschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },

},{timestamps: true})

const Admin = mongoose.models.Admin || mongoose.model("Admin",Adminschema);
export default Admin