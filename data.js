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
    const line = document.createElement("div");

    button.setAttribute("class", "remove");
    button.textContent="Remove";

    line.setAttribute("style", "width:50%; height:2px; background-color: black; margin:15px 0;")

    icontainer.setAttribute("class", "book");

    newLine.innerHTML = bookTitle.value;
    nextLine.innerHTML = author.value;

    contain.appendChild(icontainer);
    icontainer.appendChild(newLine);
    icontainer.appendChild(nextLine);
    icontainer.appendChild(button);
    icontainer.appendChild(line);

   

    /*bookTitle.value = "";
    author.value = "";*/

    const ic= document.getElementsByClassName("book");

    removebtn = document.getElementsByClassName("remove");
    for (let i = 0; i <= removebtn.length; i++) {
      removebtn[i].addEventListener("click", function () {
			  
        ic[i].remove();

        });
    }
  });
};
