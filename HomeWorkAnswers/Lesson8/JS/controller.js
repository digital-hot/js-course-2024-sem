let bookHtml = document.querySelector("#book-list");
let template = document.querySelector("#template").innerHTML;
bookList.renderWithTemplate(bookAttributs.books, bookHtml, template);