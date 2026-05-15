const booksService = require("../services/books.service");

const getAllBooks = async (req, res) => {
  try {
    const books = await booksService.getAllBooks();

    res.status(200).json({
      statusCode: 200,
      data: books,
      message: "Books retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error retrieving books",
      error: error.message
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await booksService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({
        statusCode: 404,
        message: "Book not found"
      });
    }

    res.status(200).json({
      statusCode: 200,
      data: book,
      message: "Book retrieved successfully"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Error retrieving book",
      error: error.message
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById
};