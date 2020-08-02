const express = require("express");
const router = express.Router();
const notes = require("../models/notes");

router.get("/", (req, res) => {
  console.log("Request to /favourites success, sending back favouite notes");    
  notes
    .getFavouriteNotes()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/update", (req, res) => {
  // let id = "5f01a31282b7412c3902e786"; //req.query.id
  console.log("FOCUS: ", req.query);
  const id = req.query.id
  console.log(id);
  notes.updateFavouriteNotes(id);

  notes
    .findByID(id)
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
