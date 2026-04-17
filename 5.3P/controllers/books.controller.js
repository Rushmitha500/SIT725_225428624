const booksService = require('../services/books.service');

async function getAllBooks(req, res) {
  try {
    const books = await booksService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
}

async function getBookById(req, res) {
  try {
    const book = await booksService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book' });
  }
}

 function integrityCheck(req, res) {
  console.log('integrity route hit');
  res.status(204).send();
}

module.exports = {
  getAllBooks,
  getBookById,
  integrityCheck
};