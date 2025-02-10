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
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
   
}
function createBook (event) {
    
 const bookName = document.querySelector(".book-name");
 const authorName = document.querySelector(".author-name");
 const bookPages = document.querySelector(".book-pages");
 const bookStatus = document.querySelector(".book-status");
 const book1 = new Book(authorName.value,bookName.value,bookPages.value,bookStatus.value);
addBookToLibrary(book1);
show();

event.preventDefault();
}


const submitButton = document.querySelector(".btn-submit");
submitButton.addEventListener("click",createBook,false);


function show () {
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
}


