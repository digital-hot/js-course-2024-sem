import {bookList} from './view.js';
import {library} from './model.js';


const html = document.querySelector("#book-list");
const template = document.querySelector("#template").innerHTML;
const bookForm = document.querySelector('#book-form');

// Inputs
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const yearInput = document.querySelector('#year-input');
const genreInput = document.querySelector('#genre-input');

let editId = null;

function render () {
    bookList.render(library.books, html, template);
}

// Обробка події відправлення форми
bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value
    };

    if (editId === null) {
        library.addBook(book);
    } else {
        library.update(editId, book);
        editId = null;
    };

    render();
    cleanForm();
})


// Обробка подій для кнопок 'Редагувати' та 'Видалити'
html.addEventListener('click', function(e) {
    if(e.target.classList.contains('edit-btn')) {
        let id = e.target.getAttribute('data-id');
        console.log(id);
        edit(id);
    }
    if(e.target.classList.contains('remove-btn')) {
        let id = e.target.getAttribute('data-id');
        console.log(id);
        remove(id);
    }
    console.dir(e.target);
   
})

function remove(id) {
    library.remove(id);
    render();
}

function edit(id) {
    const book = library.find(id);
    editId = book.id;
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    genreInput.value = book.genre;
    render();
}

function cleanForm () {
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
    genreInput.value = '';
}


render();
