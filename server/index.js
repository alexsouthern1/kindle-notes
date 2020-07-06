const express = require("express");
const libraryRoute = require("./routes/library");
const addNotesRoute = require("./routes/notes");
const bookReviewRoute = require("./routes/bookReview");
const favouritesRoute = require("./routes/favourites");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Home Page" });
});

app.use("/library", libraryRoute);
// app.use("/addNotes", addNotesRoute);
// use library js file to handle end points that start with /library

app.use("/bookreview", bookReviewRoute);

app.use("/favourite", favouritesRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
