const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const bookList = document.getElementById("bookList");

searchButton.addEventListener("click", searchBooks);

function fetchBooks(query) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => response.json())
    .then(data => data.items);
}

function displayBooks(books) {
  bookList.innerHTML = "";
  books.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <h3>${book.volumeInfo.title}</h3>
      <p>${book.volumeInfo.authors.join(", ")}</p>
    `;
    bookList.appendChild(bookElement);
  });
}

function searchBooks() {
  const query = searchInput.value;
  fetchBooks(query).then(books => displayBooks(books));
}