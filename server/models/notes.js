const mongoose = require("mongoose");

//"mongodb://localhost/books"
// connecting to DB books
mongoose
  .connect("mongodb+srv://Alex:dzwzdPdek12@cluster0.ywmut.mongodb.net/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

const notesSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  noteDate: {
    type: String,
    required: false,
  },
  noteText: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("Notes", notesSchema);

const addNote = async (note) => {
  console.log("Called from notes.js");
  console.log(note);

  const newNote = new Notes({
    bookTitle: note.Title,
    bookAuthor: "Alex",
    noteDate: note.Date,
    noteText: note.Text,
  });
  await newNote.save();
};

const deleteAllNotes = async () => {
  console.log("Delete notes called");
  Notes.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("No error: ");
      console.log(result);
    }
  });
};

const deleteNote = async () => {
  Notes.deleteOne({ bookAuthor: "Alex" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("No error: ");
      console.log(result);
    }
  });
};

module.exports = { addNote, deleteAllNotes, deleteNote };
