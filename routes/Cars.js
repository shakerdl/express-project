"use strict"
const express = require("express");
let router = express.Router();

router.use((req,res,next)=>{
    console.log(req.url,"@",Date.now());
    next();
}); // it's a middelware that i"ll fire while we write in the broswer /cars


router
.route('/:id')
.get((req,res)=>{    // in the method we are get the root and send it back the h1 via respond
    //  console.log(req.headers);
    console.log(req.url);
    console.log(req.path);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.query); 
    console.log(req.params); // here I"ll take  app.get("/user/45") or app.get("/user/:id")  req.params.id
     res.status(404).end();
 }); 

router.route("/company/:id").get((req,res)=>{
    res.send("hi get /cars/company"+ req.params.id);

}).put((req,res)=>{
    res.send("hi put /cars/company"+ req.params.id);

});

module.exports = router;