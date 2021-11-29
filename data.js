const bookTitle = document.getElementById("title");
const btn = document.getElementById("submitbtn");
const author = document.getElementById("author");
const bookList = document.getElementById("book-list");

window.onload = function () {
  btn.addEventListener("click", function () {
    const contain = document.getElementById("dynamic");
    const newLine = document.createElement("p");
    const nextLine = document.createElement("p");
    const button = document.createElement("button");

    newLine.innerHTML = bookTitle.value;
    nextLine.innerHTML = author.value;

    contain.appendChild(newLine);
    contain.appendChild(nextLine);
    contain.appendChild(button);

    newLine.innerHTML = bookTitle.value;
    nextLine.innerHTML = author.value;

    bookTitle.value = "";
    author.value = "";
  });
};

const books = {
  Title: bookTitle,
  Author: author,
};

bookTitle.addEventListener("input", (e) => {
  e.preventDefault();

  books.Title = bookTitle.value;

  localStorage.setItem("books", JSON.stringify(books));
});

author.addEventListener("input", (e) => {
  e.preventDefault();

  books.Author = author.value;

  localStorage.setItem("books", JSON.stringify(books));
});

// add books to new page

//remove books
