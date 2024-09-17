const library = {
	books: [
		{
			id: 1,
			title: '1984',
			author: 'Джордж Орвелл',
			year: 1949,
			genre: 'Антиутопія',
		},
		{
			id: 2,
			title: 'Гаррі Поттер і філософський камінь',
			author: 'Дж. К. Роулінг',
			year: 1997,
			genre: 'Фентезі',
		},
		{
			id: 3,
			title: 'Гра престолів',
			author: 'Джордж Р. Р. Мартін',
			year: 1996,
			genre: 'Фентезі',
		},
		{
			id: 4,
			title: 'Старий і море',
			author: 'Ернест Хемінгуей',
			year: 1952,
			genre: 'Пригодницький роман',
		},
		{
			id: 5,
			title: 'Майстер і Маргарита',
			author: 'Михайло Булгаков',
			year: 1967,
			genre: 'Фантастика',
		},
	],

	addBook(book) {
		this.books.push(book);
	},

	removeBook(id) {
		let index = this.books.findIndex((book) => book.id === id);
		console.log(index);
		this.books.splice(index, 1);
		console.log(id);
	},

	updateBook(id, book) {
		let index = this.books.findIndex((book) => book.id === id);
		this.books[index] = book;
	},

	findBook(id) {
		let index = this.books.findIndex((book) => book.id === id);
		return this.books[index];
	},
};
