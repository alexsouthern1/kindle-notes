const express = require("express");
const router = express.Router();
const books = require("../models/books");
const notes = require("../models/notes");
// const notes = require("../routes/notes");

// no longer dealing with app object, using mini app
router.get("/", (req, res) => {
  // res.send("Hello world!");
  console.log("Get request has worked!", req.query);
});

router.get("/getbooks", (req, res) => {
  details = notes
    .distinctBookDetails()
    .then((result) => {
      // console.log(result);      
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;