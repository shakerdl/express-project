 "use strict"; 

 const express = require("express");
 const app = express();

 app.get('/',(req,res)=>{    // in the method we are get the root and send it back the h1 via respond
     console.log(req.url); // it only show us the "/" on the console
     res.send("<h1>helo</h1>");
 }); // determine the content-type automatically
app.get('/old',(req,res)=>{
    res.redirect(301,'/new')
});

app.get('/new',(req,res)=>{  
   
    res.send("<h2>new</h2>");
}); 

 app.listen(3000,(err)=> {
    if (err) {
        console.log('there is a problem',err);
        return;
    }
    console.log('listening on port 3000');
 });