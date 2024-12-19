import mongoose from "mongoose";

const Venderschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },

},{timestamps: true})

const Vender = mongoose.models.Vender || mongoose.model("Vender",Venderschema);
export default Vender