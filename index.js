function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => renderBooks(data))
    .catch(error => console.log(error));
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

window.addEventListener('load', fetchBooks);

// Return the fetch() request from fetchBooks()
export { fetchBooks };
