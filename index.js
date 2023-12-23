const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("*",(req,res)=>{
     res.send("<h2 style='text-align:center;'>page not found<h2>")
})
app.listen(8012,()=>{console.log("server running in port 8012")})
