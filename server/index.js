const express = require("express");
const libraryRoute = require("./routes/library");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Home Page" });
});

// app.get("/hi", (req, res) => {
//   res.send({ message: "Home Page"});
// });

// app.post("/hi", (req, res) => {
//   res.send({ message: "Home Page"});
// });
app.use("/library", libraryRoute);
// use library js file to handle end points that start with /library

// books.getBooks();

// books.createBook();
// books.deleteBookWithTitle("1984");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
