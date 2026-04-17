async function loadBooks() {
  const container = document.getElementById('books-container');

  try {
    const response = await fetch('/api/books');
    const books = await response.json();

    container.innerHTML = '';

    books.forEach((book) => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';

      bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Summary:</strong> ${book.summary}</p>
        <p><strong>Price:</strong> AUD ${book.price}</p>
      `;

      container.appendChild(bookCard);
    });
  } catch (error) {
    container.innerHTML = '<p>Failed to load books.</p>';
  }
}

loadBooks();