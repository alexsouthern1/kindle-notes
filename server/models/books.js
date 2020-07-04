const mongoose = require("mongoose");

//"mongodb://localhost/books"
mongoose
  .connect("mongodb+srv://Alex:dzwzdPdek12@cluster0.ywmut.mongodb.net/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB: books collection"))
  .catch((err) => console.log(err));

// Using schema constructor
// Instantiating mongoose Schema
const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  notesCount: {
    type: Number,
    required: false,
  },
  importDate: {
    type: String,
    required: false,
  },
  documentType: {
    type: String,
    required: false,
  },
});

const Books = mongoose.model("Books", booksSchema);

const createBook = async () => {
  const book = new Books({
    title: "1984",
    author: "George Orwell",
    notesCount: 5,
  });

  const result = await book.save();
  console.log(result);
};

const deleteBookWithTitle = async (name) => {
  Books.deleteOne({ title: name }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("No error: " + result);
    }
  });
};

const updateBooks = async () => {
  const books = await Books.find().select({
    title: 1,
    author: 1,
    notesCount: 1,
    importDate: 1,
  });

  return books;
};

module.exports = {
  createBook,
  deleteBookWithTitle
};
