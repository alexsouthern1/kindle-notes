const notes = require("../models/notes");
const express = require("express");
const router = express.Router();
const parser = require("../parser");

// How can I get this loaded up every time rather than call function each time

const addNotes = async () => {
  try {
    let notesArr = await parser.getNotes();
    console.log("addNotes called");
    console.log(notesArr);
  } catch (err) {
    console.log(err);
  }

  for (i = 0; i < notesArr.length; i++) {
    note = notesArr[i];
    notes.addNote(note);
  }
};

// addNotes();

const deleteAllNotes = async () => {
  console.log("Deleting all notes...");
  notes.deleteAllNotes();
};

const deleteOneNote = async () => {
  notes.deleteNote();
};

// deleteOneNote();
deleteAllNotes();

router.get("/", (req, res) => {
  console.log("Request to add books has worked");
});
