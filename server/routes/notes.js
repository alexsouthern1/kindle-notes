const notes = require("../models/notes");
const express = require("express");
const router = express.Router();
const parser = require("../parser");

const addNotes = async () => {
  try {
    let notesArr = await parser.getNotes();    
    // console.log(notesArr);
    for (i = 0; i < notesArr.length; i++) {
      note = notesArr[i];      
      notes.addNote(note);
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteAllNotes = async () => {
  console.log("Deleting all notes...");
  notes.deleteAllNotes();
};

const deleteOneNote = async () => {
  notes.deleteNote();
};

const getUniqueBooks = async () => {
  try {    
    bookDetails = await notes.distinctBookDetails();    
    console.log(bookDetails);
  } catch (err) {
    console.log(err);
  }
};

// deleteOneNote();
// deleteAllNotes();
// addNotes();
// getUniqueBooks();

router.get("/", (req, res) => {
  console.log("Request to add books has worked");
});

module.exports  = router;