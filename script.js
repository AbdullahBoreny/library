const myLibrary = [];


const submitButton = document.querySelector(".btn-submit");
submitButton.addEventListener("click",createBook,false);
const container = document.querySelector(".container")
const closeButton = document.querySelector('.close-all');
closeButton.addEventListener("click",()=> {
    if(confirm("Are you sure?")) {
        container.textContent = " ";
    }
    else {
        return;
    }

});

function Book(author,name,pages,status) {
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.status = status;
};
Book.prototype.toggleStatus = function(status) {
    if(status.textContent.includes("no")) {
        status.textContent = `Status: yes read`;

    }
    else {
       status.textContent = "Status: not read";
      
    }
};

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

createCard(book1);
event.preventDefault();
}
let i = 0;
function createCard (book) {
    
        const container = document.querySelector(".container");
        container.classList.add("container-style");
        const card = document.createElement("div");
        let toggleContainer = document.createElement("div")
        toggleContainer.classList.add('toggle-container');
        let toggleButton = document.createElement("button")
        toggleButton.classList.add("toggle-sign")
        let toggleInfo = document.createElement("div")
        toggleInfo.classList.add("toggle-info")
        
        toggleInfo.textContent = 'Click to toggle book status';
        toggleContainer.appendChild(toggleButton);
        toggleContainer.appendChild(toggleInfo);



        let removeSign = document.createElement("button");
        removeSign.textContent = `X`;
        removeSign.classList.add("remove-sign");
        removeSign.setAttribute("value",i);
        i++;
        card.classList.add("card");
       
        let author =document.createElement("div");
        author.textContent = `Author Name: ${book.author}`;
     
        let name = document.createElement("div");
        name.textContent = `Book Name: ${book.name}`;
     
        let pages = document.createElement("div");
        pages.textContent = `No' of pages: ${book.pages}`;
     
        let status = document.createElement("div");
        status.textContent = `Status:${book.status}`
        card.appendChild(author);
        card.appendChild(name);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(toggleContainer);
        card.appendChild(removeSign);
        addBookToLibrary(card);
        container.appendChild(card);


        removeSign.addEventListener("click",() =>{
            if(confirm("Are you sure?")) {
                container.removeChild(myLibrary[removeSign.value]);
            }
            else {
                return;
            }
         
        });
        toggleButton.addEventListener("click",() => {
            book.toggleStatus(status);
        });
     
       
}



