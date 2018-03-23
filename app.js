const express=require("express"),
    app=express();

app.get("/",(req,res,next) =>{
    res.send("home");
});

app.listen("3000",()=>{
    console.log("server listened 3030 port");
});