const express = require("express");
const router = express.Router();
const notes = require("../models/notes");

router.get("/", (req, res) => {
  console.log("Request to /mastery success, sending back selected notes");
  notes
    .getMasteryNotes()
    .then((result) => {      
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
