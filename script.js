const myLibrary = [];

function Book(title,author,pages,isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

/*function addBookToLibrary() {
  let book1 = prompt("enter a book");
  let book2 = prompt("enter a book");
  myLibrary.push(book1);
  myLibrary.push(book2);
}
  */
function display() {
    myLibrary.forEach(item => {
        console.log(item);
    });
}

    function togglePopup() {
        const overlay = document.getElementById('popupOverlay');
        overlay.classList.toggle('show');
    }
