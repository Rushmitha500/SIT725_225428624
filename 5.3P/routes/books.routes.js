const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

router.get('/books', booksController.getAllBooks);
router.get('/books/:id', booksController.getBookById);
router.get('/integrity-check42', booksController.integrityCheck);

module.exports = router;