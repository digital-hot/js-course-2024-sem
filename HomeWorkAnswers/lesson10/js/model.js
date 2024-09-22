const bookList = {
  books: [
    {
      id: 1,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
    },
    {
      id: 2,
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
    },
    {
      id: 3,
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
    },
    {
      id: 4,
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
    },
    {
      id: 5,
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
    },
  ],

  lastId: 5,

  addBook(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
  },

  removeBook(id) {
    const index = this.books.findIndex((x) => x.id == id);
    this.books.splice(index, 1);
  },

  updateBook(book, id) {
    const index = this.books.findIndex((x) => x.id == id);
    bookList.books[index] = book;
  },

  findBook(id) {
    const index = this.books.findIndex((x) => x.id == id);
    return this.books[index];
  },

  checkTitleBook() {
    const form = document.forms[0];
    form.titleBook.addEventListener("input", function () {
      bookList.books.forEach((book) => {
        if (form.titleBook.value == book.title) {
          form.titleBook.setCustomValidity("Книга з такою назвою вже внесена!");
        } else {
          form.titleBook.setCustomValidity(""); // прибираемо помилку
        }
      });
    });
  },
};
