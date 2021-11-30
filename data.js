let Title;
let Author;
let bookList = [];

function getValues() {
  Title = document.querySelector('#title').value;
  Author = document.querySelector('#author').value;
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

function addBook() {
  document.getElementById('dynamic').innerHTML = '';
  bookList.forEach((book, index) => {
    document.getElementById('dynamic').innerHTML += `
    <div class="books">
      <p class="title">${book.title}</p>
      <p class="authir">${book.author}</p>
      <button class="remove" onClick = 'removeItem(${index})'>Remove</button>
      <hr> 
    </div>`;
  });
}
if (localStorage.getItem('Books')) {
  bookList = JSON.parse(localStorage.getItem('Books'));
  addBook();
}

function storeBook() {
  getValues();
  const data = {
    title: Title,
    author: Author,
  };
  bookList.push(data);
  Title = '';
  Author = '';
  localStorage.setItem('Books', JSON.stringify(bookList));
  addBook();
}
/* eslint-disable no-unused-vars */
const btnAdd = document.getElementById('btn');
btnAdd.addEventListener('click', storeBook);
function removeItem(index) {
  bookList.splice(index, 1);
  localStorage.setItem('Books', JSON.stringify(bookList));
  addBook();
}
