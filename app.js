 "use strict"; 

 const express = require("express");
 const app = express();
 require("dotenv").config();

let port = process.env.PORT;
let host = process.env.HOST;



 app.get('/shakerdl',(req,res)=>{    // in the method we are get the root and send it back the h1 via respond
    //  console.log(req.headers);
    console.log(req.url);
    console.log(req.path);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.query); 
    console.log(req.params); // here I"ll take  app.get("/user/45") or app.get("/user/:id")  req.params.id

    




     res.status(404).end();
 }); 

 app.listen(port,host,(err)=> {
    if (err) {
        console.log('there is a problem',err);
        return;
    }
    console.log(`server is lisiting ${host}:${port}`); // I have to use backticket
 });

