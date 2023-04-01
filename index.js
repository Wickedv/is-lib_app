let myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let page = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
  render();
}

let addNewBookBtn = document.getElementById("addBook");
addNewBookBtn.addEventListener("click", function () {
  let bookForm = document.querySelector("#book-form");
  bookForm.style.display = "block";
});

document
  .querySelector("#book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

function render() {
  let lib = document.querySelector("#library");
  lib.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<h1>${book.title}</h1>
                            <h3>by ${book.author}</h3>
                            <h5>${book.page} pages</h5>
                            <p class="read-status">${book.read ? 'Read' : "Not Read Yet"}</p>
                            <button class = "remove-btn" onclick="removeBook(${i})">Remove</button>
                            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>`;
    lib.appendChild(bookEl);
  }
}

function removeBook(index){
  myLibrary.splice(index,1);
  render();
}
