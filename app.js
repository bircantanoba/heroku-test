const express=require("express"),
    app=express();

app.get("/",(req,res,next) =>{
    res.send("home");
});

app.set('port', process.env.PORT || 3030);

app.listen(app.get('port'),()=>{
    console.log("server listened "+app.get('port')+" port");
});