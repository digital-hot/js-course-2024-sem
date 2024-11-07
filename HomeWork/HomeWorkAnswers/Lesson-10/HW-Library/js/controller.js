let element = document.querySelector("#books");
const html = document.querySelector("#books");
const template = document.querySelector("#template").innerHTML;

const booksForm = document.querySelector("#booksForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = false;
let elementId;

function render() {
    bookList.renderWithTemplate(booksList.books, html, template);
}

booksForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId) {
    booksList.update(elementId, book);
    editId = false;
  } else {
    booksList.add(book);
  }

  render();

  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  genreInput.value = "";
});

function remove(id) {
  booksList.remove(id);
  render();
}

function edit(id) {
  const book = booksList.find(id);

  editId = true;
  elementId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;

  render();
}

render();