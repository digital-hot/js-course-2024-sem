const libraryList = {
  render(books, element) {
    element.innerHTML = ""; // Очищення вмісту елемента
    books.forEach((book) => {
      let li = document.createElement("li");
      li.classList.add("book");
      li.insertAdjacentHTML("beforeend", `<h3> ${book.title}</h3>`);
      li.insertAdjacentHTML("beforeend", `<p>Автор: ${book.author}</p>`);
      li.insertAdjacentHTML("beforeend", `<p>Рік видання: ${book.year}</p>`);
      li.insertAdjacentHTML("beforeend", `<p>Жанр: ${book.genre}</p>`);
      li.insertAdjacentHTML(
        "beforeend",
        `<button onclick="updateBook(${book.id})">Редагувати</button>`
      );
      li.insertAdjacentHTML(
        "beforeend",
        `<button onclick="deleteBook(${book.id})">Видалити ${book.id}</button>`
      );
      element.appendChild(li);
    });
  },
};
