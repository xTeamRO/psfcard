const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send(path.join(__dirname,"index.js"))
})
app.get("*",(req,res)=>{
     res.send("<h2 style='text-align:center;'>page not found<h2>")
})