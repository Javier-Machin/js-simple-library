const quixote = new Book("Don Quixote", "Cervantes", 980, "false");
const artOfWar = new Book("The Art of War", "Sun Tzu", 130, "false");
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
  mainContainer.insertAdjacentElement('afterbegin', booksContainer)
  
  books.forEach(function(book) {
    let bookInfo = `${book.title}, ${book.author}, ${book.pages}`;
    book.read == "true" ? bookInfo += ", yes" : bookInfo += ", no";
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
    node.title ="Click to toggle read/not read";                 
    node.appendChild(textNode);
    node.appendChild(deleteBtn); 
    node.addEventListener("click", function() {
      book.toggleRead();
      render(books);
    })

    booksContainer.appendChild(node);


  })
}

function addBook(books) {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value; 
  const pages = document.getElementById("form-pages").value;
  let read = false;
  const readRadios = document.getElementsByName('read');

  readRadios.forEach(function(radio)  {
    if (radio.checked) {
      read = radio.value;
    }
  })

  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  if (this.read == "true") {
    this.read = "false";
  } else {
    this.read = "true";
  }
}


render(books);
