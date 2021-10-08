"use strict"
const express = require("express");
let router = express.Router();
const postControllers = require("../controllers/postControllers");

// router.use((req,res,next)=>{
//     console.log(req.url,"@",Date.now());
//     next();
// }); // it's a middelware that i"ll fire while we write in the broswer /cars


// demo of login - login to facebook , login to google with the user tj


router
.route('/:id')
.get(postControllers.getAllPosts); 

router.route('/user/:id').get(postControllers.getAllPosts);

  router.route('/user/:id/edit').get(postControllers.getPostById);
  
  router.route('/user/:id').post(postControllers.createNewPost);

module.exports = router;