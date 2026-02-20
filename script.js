const submitButton = document.querySelector(".popup-box");
let bookStatus = document.querySelector(".book-status");
console.log(bookStatus.checked);

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookName = document.querySelector(".book-name");
  const authorName = document.querySelector(".author-name");
  const bookPages = document.querySelector(".book-pages");

  const book1 = new Book(
    authorName.value,
    bookName.value,
    bookPages.value,
    bookStatus.checked,
  );

  createCard(book1);
  togglePopup();
});

const container = document.querySelector(".container");
const closeButton = document.querySelector(".close-all");
closeButton.addEventListener("click", () => {
  if (confirm("Are you sure?")) {
    localStorage.clear();
    printStats();

    container.textContent = "";
  } else {
    return;
  }
});

function Book(author, name, pages, status) {
  this.author = author;
  this.name = name;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

const displayBooksDom = () => {
  for (let i = 0; i < localStorage.length; i++) {
    createCard(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
};

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

function createCard(book) {
  let container = document.querySelector(".container");
  container.classList.add("container-style");
  const card = document.createElement("div");
  let toggleContainer = document.createElement("div");
  toggleContainer.classList.add("toggle-container");
  let toggleButton = document.createElement("button");
  toggleButton.classList.add("toggle-sign");
  let toggleInfo = document.createElement("div");
  toggleInfo.classList.add("toggle-info");

  toggleInfo.textContent = "MARK AS READ / UNREAD";
  toggleContainer.append(toggleButton, toggleInfo);

  let removeSign = document.createElement("button");
  removeSign.textContent = `X`;
  removeSign.classList.add("remove-sign");
  removeSign.setAttribute("value", book.id);

  card.classList.add("card");

  let author = document.createElement("div");
  author.textContent = `Author Name: ${book.author}`;

  let name = document.createElement("div");
  name.textContent = `Book Name: ${book.name}`;

  let pages = document.createElement("div");
  pages.textContent = `No' of pages: ${book.pages}`;

  let status = document.createElement("div");
  console.log(book.status);

  status.textContent = book.status ? `Status: READ` : `Status: NOT READ`;

  localStorage.setItem(book.id, JSON.stringify(book));

  card.append(author, name, pages, status, toggleContainer, removeSign);

  container.appendChild(card);
  printStats();
  removeSign.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
      container.removeChild(card);
      localStorage.removeItem(removeSign.value);
      printStats();
    } else {
      return;
    }
  });
  toggleButton.addEventListener("click", () => {
    // Toggle the book status
    book.status = !book.status;
    // Save updated book to localStorage
    localStorage.setItem(book.id, JSON.stringify(book));
    // Update the card display
    status.textContent = book.status ? `Status: READ` : `Status: NOT READ`;
    printStats();
  });
}
function getAllReadBooks() {
  const books = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const book = JSON.parse(localStorage.getItem(key));
      if (book && "status" in book) {
        books.push(book);
      }
      notReadBooks.push(book);
    } catch {
      continue;
    }
  }
  return books;
}
function printStats() {
  printDomRead = () => {
    const readCount = document.querySelector(".stat-read");
    const readBook = getAllReadBooks().filter((book) => book.status === true);
    readCount.textContent = readBook.length;
  };
  printDomTotal = () => {
    let total = document.querySelector(".stat-total");
    total.textContent = localStorage.length;
  };
  printUnreadDom = () => {
    let unread = document.querySelector(".stat-unread");
    const unreadBook = getAllReadBooks().filter(
      (book) => book.status === false,
    );
    unread.textContent = unreadBook.length;
  };
  printDomRead();
  printDomTotal();
  printUnreadDom();
}

displayBooksDom();
togglePopup();
printStats();
