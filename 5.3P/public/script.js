const getBooksBtn = document.getElementById("getBooksBtn");
const bookList = document.getElementById("bookList");
const bookDetails = document.getElementById("bookDetails");

function formatPrice(price) {
  if (!price) return "";
  if (price.$numberDecimal) return price.$numberDecimal;
  if (price.$numberDouble) return price.$numberDouble;
  if (price.amount) return price.amount;
  return price.toString();
}

getBooksBtn.addEventListener("click", async function () {
  bookDetails.style.display = "none";
  bookDetails.innerHTML = "";

  const response = await fetch("/api/books");
  const result = await response.json();
  const books = result.data;

  bookList.innerHTML = "";

  books.forEach(function (book) {
    const item = document.createElement("div");
    item.className = "book-item";
    item.textContent = book.title + " " + formatPrice(book.price) + " AUD";

    item.addEventListener("click", function () {
      showBookDetails(book._id);
    });

    bookList.appendChild(item);
  });

  bookList.style.display = "block";
});

async function showBookDetails(id) {
  const response = await fetch("/api/books/" + id);
  const result = await response.json();
  const book = result.data;

  bookDetails.innerHTML = `
    <p><b>Title:</b> ${book.title}</p>
    <p><b>Author:</b> ${book.author}</p>
    <p><b>Year:</b> ${book.year}</p>
    <p><b>Genre:</b> ${book.genre}</p>
    <p><b>Summary:</b> ${book.summary}</p>
    <p><b>Price (AUD):</b> ${formatPrice(book.price)}</p>
  `;

  bookDetails.style.display = "block";
}