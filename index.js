// console.log("hello");

const express= require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const JobRoutes = require("./routes/job");

dotenv.config();



const app= express();
console.log(process.env.DB_USERNAME,process.env.DB_PASSWORD);

// TODO: To connect wd nodejs with Db

mongoose
.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1c29sup.mongodb.net/`)

.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log("Database connection failed",err);
})


app.use(express.json());  // this should be before the route called otherwise it show undefined as here order matters most...

app.use("/api/v1/job/",JobRoutes);






app.listen(5000,()=>console.log("server is running at port 5000"));
