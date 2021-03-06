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
      this.bookList = JSON.parse(localStorage.getItem('Books'));
      this.render();
    }
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  render() {
    if (JSON.parse(localStorage.getItem('Books')) != null) {
      this.bookList = JSON.parse(localStorage.getItem('Books'));
      document.getElementById('dynamic').innerHTML = '';
      this.bookList.forEach((book, index) => {
        document.getElementById('dynamic').innerHTML += `
        <div class="books">
          <p class="title"> <b> "${book.Title}"    &nbsp; By  ${book.Author}</b></p>
          <button class="remove btns" onClick = 'bookl.remove(${index})'><b> Remove</b> </button>
          <hr>
        </div>`;
      });
    } else {
      document.getElementById('dynamic').innerHTML = '';
    }
  }

  remove(index) {
    this.bookList.splice(index, 1);
    localStorage.setItem('Books', JSON.stringify(this.bookList));
    this.render();
  }
}

const d = new Date();
document.getElementById('date').innerHTML = d;

document.getElementById('dynamic').style.display = 'block';
document.getElementById('all-books').style.display = 'block';
document.getElementById('add-book').style.display = 'none';
document.getElementById('contact').style.display = 'none';
document.getElementById('list').style.color = 'blue';

document.getElementById('add-new').addEventListener('click', () => {
  document.getElementById('add-book').style.display = 'block';
  document.getElementById('dynamic').style.display = 'none';
  document.getElementById('all-books').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('add-new').style.color = 'blue';
  document.getElementById('list').style.color = 'black';
  document.getElementById('contact-click').style.color = 'black';
});

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('dynamic').style.display = 'block';
  document.getElementById('all-books').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('add-new').style.color = 'black';
  document.getElementById('list').style.color = 'blue';
  document.getElementById('contact-click').style.color = 'black';
});

document.getElementById('contact-click').addEventListener('click', () => {
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('dynamic').style.display = 'none';
  document.getElementById('all-books').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('add-new').style.color = 'black';
  document.getElementById('list').style.color = 'black';
  document.getElementById('contact-click').style.color = 'blue';
});

const bookl = new BookL();
bookl.render();
document.getElementById('btn').addEventListener('click', () => {
  bookl.add();
});
