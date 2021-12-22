'use strict';


import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()


//..connect to MongoDB database and then run the sent parameter function (THENFUNC)
const DBCONNECT =(THENFUNC)=>{
    console.log("Please wait while Cloud connects to MongoDB......");
    mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Cloud DB connection successfully.")
        THENFUNC()})
    .catch(error => console.log("Error Cloud DB Connection\n",error));

};


export default DBCONNECT;