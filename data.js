class Book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

class BookL {
  bookList = [];
  add() {
    Title = document.querySelector('#title').value;
    Author = document.querySelector('#author').value;
    if (Title !=='' && Author !=='') {
      let book = new Book(Title,Author);
      this.bookList.push(book);
      console.log(this.bookList);
      document.getElementById('dynamic').innerHTML = '';
      this.bookList.forEach((book, index) => {
        document.getElementById('dynamic').innerHTML += `
        <div class="books">
          <p class="title">${book.Title}</p>
          <p class="authir">${book.Author}</p>
          <button class="remove" onClick = 'removeItem(${index})'>Remove</button>
          <hr>
        </div>`;
      });
    }
  }
}

let Title;
let Author;


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


let bookl = new BookL();
document.getElementById('btn').addEventListener('click', function(){
bookl.add();
})
//btnAdd.addEventListener('click', storeBook);

const removeItem = (index) => {
  bookList.splice(index, 1);
  localStorage.setItem('Books', JSON.stringify(bookList));
  addBook();
};

if (1 === 0) {
  removeItem();
}
