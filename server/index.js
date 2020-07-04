const express = require("express");
const libraryRoute = require("./routes/library");
const addNotesRoute = require("./routes/notes")
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Home Page" });
});


app.use("/library", libraryRoute);
// app.use("/addNotes", addNotesRoute);
// use library js file to handle end points that start with /library

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
