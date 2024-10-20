const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector("#bookForm");

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

let editId = null;

function render() {
  bookList.renderWithTemplate(Library.books, html, template);
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };

  if (editId == null) {
    Library.add(book);
  } else {
    Library.update(editId, book);
    editId = null;
  }
  render();
});

function remove(id) {
    Library.remove(id);
    render();
}

function edit(id) {
    const book = Library.find(id);
    editId = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    render();
}
render();
