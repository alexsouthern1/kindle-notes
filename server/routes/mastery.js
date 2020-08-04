const express = require("express");
const router = express.Router();
const notes = require("../models/notes");

router.get("/", (req, res) => {
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
