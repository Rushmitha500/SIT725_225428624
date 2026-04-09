const booksService = require('../services/books.service');

const getAllBooks = (req, res, next) => {
  try {
    const books = booksService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = (req, res, next) => {
  try {
    const { id } = req.params;
    const book = booksService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById
};