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
  console.log(myLibrary)
}

function NewBook(event) {
  event.preventDefault(); 

  // Access form data
  var subAuthor = document.getElementById('author').value;
  var subTitle = document.getElementById('title').value;
  var subLenght = document.getElementById('pages').value;
  var subRead = document.getElementById('read').checked;

  // Call your function with the form data
  addBookToLibrary(subTitle, subAuthor, subLenght, subRead);
}

document.getElementById('addBookForm').addEventListener('submit', NewBook);