const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const mongoURI = "mongodb://localhost:27017/booksdb";

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.use("/", booksRoutes);

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});