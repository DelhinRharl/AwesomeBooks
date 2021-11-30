let Title;
let Author;
let bookList = [];

const getValues = () => {
  Title = document.querySelector('#title').value;
  Author = document.querySelector('#author').value;
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
};

const addBook = () => {
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
};

if (localStorage.getItem('Books')) {
  bookList = JSON.parse(localStorage.getItem('Books'));
  addBook();
}

const storeBook = () => {
  getValues();
  const data = {
    title: Title,
    author: Author,
  };
  if (data.title !== '' && data.author !== '') {
    bookList.push(data);
  }
  Title = '';
  Author = '';
  localStorage.setItem('Books', JSON.stringify(bookList));
  addBook();
};

const btnAdd = document.getElementById('btn');

btnAdd.addEventListener('click', storeBook);

const removeItem = (index) => {
  bookList.splice(index, 1);
  localStorage.setItem('Books', JSON.stringify(bookList));
  addBook();
};

if (1===0) {
  removeItem();
}
