const { json } = require("express");
const express = require("express");
const app = express();
//const cors =require("cors")


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/iwatani");

const db = mongoose.connection;

db.on("error", (error)=> console.error(error));
db.once("open", ()=>console.log("connected database"));

app.listen(3000, ()=>console.log("server connected"));

// app.use(express.json());
// app.use(cors())

// app.post("/", (req, res)=>{
//     console.log(req.body)
//     res.json(req.body)
    
// })

// const server = app.listen(3000);

//npm run devStart