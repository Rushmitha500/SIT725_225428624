const mongoose = require('mongoose');
const Book = require('./models/book.model');

const MONGO_URI = 'mongodb://127.0.0.1:27017/booksdb';

const books = [
  {
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    year: 2006,
    genre: 'Science Fiction',
    summary: 'The Three-Body Problem is the first novel in the Remembrance of Earth’s Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilisation from a nearby system of three Sun-like stars orbiting one another, a representative example of the three-body problem in orbital mechanics.',
    price: mongoose.Types.Decimal128.fromString('24.99')
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Classic',
    summary: 'Jane Eyre explores orphanhood, poverty, class, morality, and love as the determined but vulnerable Jane becomes Rochester’s governess and forges her own independence.',
    price: mongoose.Types.Decimal128.fromString('18.50')
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Classic',
    summary: 'Elizabeth Bennet and Mr. Darcy navigate pride, misjudgment, and social expectations in a sharp study of manners and marriage.',
    price: mongoose.Types.Decimal128.fromString('16.99')
  },
  {
    title: 'The English Patient',
    author: 'Michael Ondaatje',
    year: 1992,
    genre: 'Historical Fiction',
    summary: 'On a villa outside Siena at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.',
    price: mongoose.Types.Decimal128.fromString('22.00')
  },
  {
    title: 'Small Gods',
    author: 'Terry Pratchett',
    year: 1992,
    genre: 'Fantasy',
    summary: 'The world is round and gods return as a tortoise, and novice Brutha must confront dogma, opinion, and the nature of belief. The Discworld is flat and is carried by its sun, but Omnian doctrine says that the world is round and mounts the sun.',
    price: mongoose.Types.Decimal128.fromString('20.75')
  }
];

async function seedBooks() {
  try {
    await mongoose.connect(MONGO_URI);
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('Books seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedBooks();