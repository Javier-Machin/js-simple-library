const quixote = new Book("Don Quixote", "Cervantes", 980, false);
const artOfWar = new Book("The Art of War", "Sun Tzu", 130, false);
const books = [quixote, artOfWar];

function render(books) {
  mainContainer = document.querySelector(".main-container") 
  
  books.forEach(function(book) {
    const bookInfo = `${book.title}, ${book.author}, 
                      ${book.pages}, ${book.read}`;
    const node = document.createElement("article");
    const textNode = document.createTextNode(bookInfo); 
    node.className = "book";                 
    node.appendChild(textNode);                              
    mainContainer.appendChild(node);
  })
}

function addBook(books) {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value; 
  const pages = document.getElementById("form-pages").value;
  const read = document.getElementById("form-read").value;
  
  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

