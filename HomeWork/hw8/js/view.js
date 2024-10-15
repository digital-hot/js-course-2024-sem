const libraryList = {
  render(books, element) {
    books.forEach((book) => {
      let li = document.createElement("li");
      li.classList.add("book");
      li.insertAdjacentHTML("beforeend", `<h3> ${book.title}</h3>`);
      li.insertAdjacentHTML("beforeend", `<p>Автор: ${book.author}</p>`);
      li.insertAdjacentHTML("beforeend", `<p>Рік видання: ${book.year}</p>`);
      li.insertAdjacentHTML("beforeend", `<p>Жанр: ${book.genre}</p>`);
      element.appendChild(li);
    });
  },
};
