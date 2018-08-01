const quixote = new Book("Don Quixote", "Cervantes", 980, false);
const artOfWar = new Book("The Art of War", "Sun Tzu", 130, false);
const books = [quixote, artOfWar];
const submitBtn = document.getElementById("form-submit");
const newBookBtn = document.getElementById("new-book-button");
const bookForm = document.querySelector(".book-form");

submitBtn.addEventListener("click", function() {
  addBook(books);
  render(books);
})

newBookBtn.addEventListener("click", function() {
  bookForm.classList.toggle("visible");
})


function render(books) {
  const mainContainer = document.querySelector(".main-container");
  let booksContainer = document.querySelector(".books-container");
  
  // Removes books container to prevent listing books more than once
  if (booksContainer) { mainContainer.removeChild(booksContainer); }

  booksContainer = document.createElement("section");
  booksContainer.className = "books-container";
  mainContainer.appendChild(booksContainer);
  
  books.forEach(function(book) {
    const bookInfo = `${book.title}, ${book.author}, 
                      ${book.pages}, ${book.read}`;
    const node = document.createElement("article");
    const textNode = document.createTextNode(bookInfo); 
    
    // Add a delete button for each book
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete Book";
    deleteBtn.addEventListener("click", function() {
      booksContainer.removeChild(node);
      const bookToDelete = books.indexOf(book);
      if (bookToDelete > -1) {
        books.splice(bookToDelete, 1);
      }
    })

    node.className = "book";                 
    node.appendChild(textNode);
    node.appendChild(deleteBtn);                              
    booksContainer.appendChild(node);
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

render(books);