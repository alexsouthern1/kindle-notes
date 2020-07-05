const express = require("express");
const router = express.Router();

const notes = require("../models/notes");

router.get("/", (req, res) => {
  title = req.query.bookTitle;
  notes
    .getNotesFromBook(title)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
