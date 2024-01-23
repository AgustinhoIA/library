const myLibrary = [];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read || false;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook)
}

addBookToLibrary("namw fo the wind", "pat ruff", "687", true);
addBookToLibrary("doors of stone", "pat ruf", "1687", false)

console.log(myLibrary[0].title)