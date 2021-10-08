 "use strict"; 

 const express = require("express");
 const app = express();
 require("dotenv").config();
 const cars = require("./routes/Cars"); // here it's  make the cars variabel as a router object
 const users = require("./routes/Users");
let port = process.env.PORT;
let host = process.env.HOST;

app.use(express.json());  //handel all the incoming request looking  to say if there is json and convert it to object


// app.use(sup);
app.use("/Cars",cars);  
// use the Cars.js file to handle 
// endpoint that start with /Cars

app.use("/Users",users);  
 
 app.listen(port,host,(err)=> {
    if (err) {
        console.log('there is a problem',err);
        return;
    }
    console.log(`server is lisiting ${host}:${port}`); // I have to use backticket
 });

