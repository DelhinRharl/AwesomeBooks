const bookTitle = document.getElementById("title");
const btn = document.getElementById("submitbtn");
const author = document.getElementById("author");
const bookList = document.getElementById("book-list");

window.onload = function () {
  btn.addEventListener("click", function () {
    const contain = document.getElementById("dynamic");
    const icontainer = document.createElement("div");
    const newLine = document.createElement("p");
    const nextLine = document.createElement("p");
    const button = document.createElement("button");

    button.setAttribute("id", "remove");

    newLine.innerHTML = bookTitle.value;
    nextLine.innerHTML = author.value;

    contain.appendChild(icontainer);
    icontainer.appendChild(newLine);
    icontainer.appendChild(nextLine);
    icontainer.appendChild(button);

    newLine.innerHTML = bookTitle.value;
    nextLine.innerHTML = author.value;

    bookTitle.value = "";
    author.value = "";

    const removebtn = document.getElementById("remove");
    removebtn.addEventListener("click", function () {
      newLine.innerHTML = null;
      nextLine.innerHTML = null;
      button.innerHTML = null;
    });
  });
};
