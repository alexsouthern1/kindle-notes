const mongoose = require("mongoose");

// connecting to DB books
mongoose
  .connect("mongodb+srv://Alex:dzwzdPdek12@cluster0.ywmut.mongodb.net/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB: notes collection"))
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
  favourite: {
    type: Boolean,
    required: true,
  },
});

// first argument: singular name of collection that the model is for
// second argument is schema that defines shape of documents
// Notes is a class, thus Pascal naming convention
const Notes = mongoose.model("Notes", notesSchema);

const addNote = async (note) => {
  const newNote = new Notes({
    bookTitle: note.Title,
    bookAuthor: note.Author,
    noteDate: note.Date,
    noteText: note.Text,
    favourite: false,
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

const getUniqueTitles = async () => {
  return Notes.distinct("bookTitle");
};

const distinctBookDetails = async () => {
  temp = Notes.aggregate([
    { $match: {} },
    // Defining the structure of the information we want. e.g. want field called _id.
    {
      $group: {
        _id: { title: "$bookTitle", author: "$bookAuthor" },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);
  return temp;
};

const bookImportDates = async () => {
  console.log("Called bookImportDates");

  temp = Notes.aggregate([
    { $match: {} },
    {
      $group: {
        _id: "$bookTitle",
        firstDate: { $first: "$noteDate" },
        lastDate: { $last: "$noteDate" },
      },
    },
    { $sort: { date: -1 } },
  ]);
  console.log("Hello?");

  return temp;
};

const getNotesFromBook = async (book) => {
  temp = Notes.find({ bookTitle: book }).select().sort({ noteDate: 1 });
  return temp;
};

const getFavouriteNotes = async () => {
  temp = Notes.find({ favourite: true }).select({}).sort({ bookTitle: 1 });
};

const updateFavouriteNotes = async (id) => {      
  findByID(id)
    .then((note) => {      
      const newFavouriteBool = !note[0].favourite;            
      Notes.findOneAndUpdate(
        { _id: id },
        { favourite: newFavouriteBool }
      ).then(function () {});
    })
    .catch((err) => {
      console.log(err);
    });
};

const findByID = async (id) => {
  // console.log("Finding by id: " + id);
  temp = Notes.find({ _id: id }).select({});
  return temp;
};

module.exports = {
  addNote,
  deleteAllNotes,
  deleteNote,
  getUniqueTitles,
  distinctBookDetails,
  bookImportDates,
  getNotesFromBook,
  getFavouriteNotes,
  updateFavouriteNotes,
  findByID,
};
