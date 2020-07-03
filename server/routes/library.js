const express = require('express');
const router = express.Router();
const books = require("../models/books");

// no longer dealing with app object, using mini app
router.get("/", (req, res) => {
  // res.send("Hello world!");
  console.log("Get request has worked!", req.query);    
})

router.get("/getBooks", (req, res) => {
  books
    .getBooks()
    .then((result) => {
      console.log("Sending books to client");      
      // console.log(result);    
      res.send(result);
    })  
    .catch(err => {
      console.log(err);      
    })  
})


module.exports = router;