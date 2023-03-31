let myLibrary = [];

function Book(title,author,page,read) {
    this.title=title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(title,author,page,read) {
  let newBook = new Book(title,author,page,read);
  myLibrary.push(newBook);
}

let addNewBookBtn = document.getElementById("addBook")
addNewBookBtn.addEventListener('click', function(){
    let bookForm = document.querySelector("#book-form");
    bookForm.style.display = "block";
    alert("fuck off bithch");
})