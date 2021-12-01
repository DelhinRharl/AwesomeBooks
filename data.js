/* eslint-disable-next-line max-classes-per-file */
class Book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

class BookL {
  bookList = [];

  add() {
    const Title = document.querySelector('#title').value;
    const Author = document.querySelector('#author').value;

    if (Title !== '' && Author !== '') {
      const book = new Book(Title, Author);
      this.bookList.push(book);
      localStorage.setItem('Books', JSON.stringify(this.bookList));
      this.render();
    }
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  render() {
    document.getElementById('dynamic').innerHTML = '';
    this.bookList = JSON.parse(localStorage.getItem('Books'));
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
    localStorage.setItem('Books', JSON.stringify(this.bookList));
    this.render();
  }
}

const bookl = new BookL();
bookl.render();
document.getElementById('btn').addEventListener('click', () => {
  bookl.add();
});
