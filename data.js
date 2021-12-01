class Book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

class BookL {
  bookList = [];
  add() {
    let Title;
    let Author;
    Title = document.querySelector('#title').value;
    Author = document.querySelector('#author').value;
    if (Title !=='' && Author !=='') {
      let book = new Book(Title,Author);
      this.bookList.push(book);
      this.render();
    }
  }
  render() {
    document.getElementById('dynamic').innerHTML = '';
    this.bookList.forEach((book, index) => {
      document.getElementById('dynamic').innerHTML += `
      <div class="books">
        <p class="title">${book.Title}</p>
        <p class="authir">${book.Author}</p>
        <button class="remove" onClick = 'bookl.remove(${index})'>Remove</button>
        <hr>
      </div>`;
    });
  }
  remove(index) {
    this.bookList.splice(index, 1);
    this.render();
  }
}


let bookl = new BookL();
document.getElementById('btn').addEventListener('click', function(){
bookl.add();
})
//btnAdd.addEventListener('click', storeBook);

if (1 === 0) {
  removeItem();
}
