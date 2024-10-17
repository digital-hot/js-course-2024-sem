const booksList = document.querySelector("#book-list");
const bookForm = document.querySelector("#bookForm");

// inputs

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

function rerender() {
  libraryList.render(library.books, booksList); // відмальовка списку книг
}
let editId = null;
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
  };
  if (editId == null) {
    library.add(book);
  } else {
    library.update(editId, book);
    editId = null;
  }
  rerender();
});
function deleteBook(id) {
  library.remove(id);
  rerender();
}
function updateBook(id) {
  let book = library.find(id);
  editId = book.id;

  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  genreInput.value = book.genre;
  rerender();
}
rerender(); // перша вимальовка списку
