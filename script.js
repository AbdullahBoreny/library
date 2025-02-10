const myLibrary = [];

function Book(author,name,pages,status) {
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.status = status;
}
function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}
const book1 = new Book('ahmad','Lady of night',220,'no');
const book2 = new Book('abd','Hollow Knight',210,'yes');
addBookToLibrary(book1);
addBookToLibrary(book2);
myLibrary.forEach((book) => {
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    card.classList.add("card");
    let author =document.createElement("div");
    author.textContent = `Name of the author is: ${book.author}`;
    card.appendChild(author);
    let name = document.createElement("div");
    name.textContent = `Name of the book is: ${book.name}`;
    card.appendChild(name);
    let pages = document.createElement("div");
    pages.textContent = `No' of pages is: ${book.pages}`;
    card.appendChild(pages);
    let status = document.createElement("div");
    status.textContent = `Status: ${book.status} read`
    card.appendChild(status);
    container.appendChild(card);
    
}

);

name.innerHTML = `name of the author is ${this.name}`;