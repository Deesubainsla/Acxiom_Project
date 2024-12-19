import express from 'express'
import dotenv from 'dotenv'
import { errormiddleware } from './middlewares/error.middleware.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { login,logout,signin } from './controllers/common.controllers.js';
import DBconnection from './utils/dbconnection.js';
import Authenticated from './middlewares/Authentication.middleware.js';

dotenv.config();
DBconnection(process.env.DATABASE_URI);

const app = express();
const port = process.env.PORT || 4000;

//middlewares:
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//routes
app.get('/',(req,res)=>{
    res.send("Hello World:");
})
app.post('/login',login);
app.post('/signin',signin);

app.use(Authenticated);

app.delete('/logout',logout);



//error middleware
app.use(errormiddleware);

app.listen(port,()=>{
    console.log(`app is listning on ${port}`)
})