const myLibrary = [];

function Book(title, author, pages, read) { /* */ 
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook)
}

function AddNewBook(event) {
  event.preventDefault(); 

  // Access form data
  var subAuthor = document.getElementById('Author').value;
  var subTitle = document.getElementById('Title').value;
  var subLenght = document.getElementById('Lenght').value;
  var subRead = document.getElementById('read').checked;

  // Call your function with the form data
  addBookToLibrary(subTitle, subAuthor, subLenght, subRead);
}

addBookToLibrary("name fo the wind", "pat ruff", "687", true);
addBookToLibrary("doors of stone", "pat ruf", "1687", false)

console.log(myLibrary[0].title)
