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
   // Перевірка на дублікати
   const isDuplicate = library.books.some(existingBook => 
    existingBook.title === book.title && existingBook.author === book.author
  );

  if (isDuplicate) {
    alert("Ця книга вже існує в бібліотеці.");
    return;
  }
  if (editId == null) {
    library.add(book);
  } else {
    library.update(editId, book);
    editId = null;
  }
  bookForm.reset();
  rerender();
});
function deleteBook(id) {
  library.remove(id);
  bookForm.reset();
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
yearInput.addEventListener('input', function() {
  const yearError = document.getElementById('yearError');
  const currentYear = new Date().getFullYear();
  const year = parseInt(yearInput.value, 10);

  if (isNaN(year) || year < 1450 || year > currentYear) {
    yearError.style.display = 'inline';
    yearInput.setCustomValidity('Вкажіть рік видання від 1450 до ' + currentYear);
  } else {
    yearError.style.display = 'none';
    yearInput.setCustomValidity('');
  }
});
rerender(); // перша вимальовка списку
