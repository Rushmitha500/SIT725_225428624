const mongoose = require("mongoose");
const Book = require("./models/book.model");

const mongoURI = "mongodb://localhost:27017/booksdb";

const books = [
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2006,
    genre: "Science Fiction",
    summary: "The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy.",
    price: mongoose.Types.Decimal128.fromString("29.99")
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    year: 1847,
    genre: "Classic",
    summary: "Jane Eyre explores orphanhood, poverty, class, morality, and love.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Pride and Prejudice follows Elizabeth Bennet and Mr Darcy.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "The English Patient is set near the end of World War II.",
    price: mongoose.Types.Decimal128.fromString("25.39")
  },
  {
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "Small Gods explores belief, religion, and power through satire.",
    price: mongoose.Types.Decimal128.fromString("31.99")
  }
];

mongoose.connect(mongoURI)
  .then(async () => {
    console.log("Connected to MongoDB");

    await Book.deleteMany({});
    await Book.insertMany(books);

    console.log("Books seeded successfully");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Error:", error);
  });