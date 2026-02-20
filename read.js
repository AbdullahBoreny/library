const container = document.querySelector(".container");

function getAllBooks() {
  const books = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const book = JSON.parse(localStorage.getItem(key));
      if (book && "status" in book) books.push(book);
    } catch {
      continue;
    }
  }
  return books;
}

function renderReadBooks() {
  container.innerHTML = "";

  const books = getAllBooks().filter(book => book.status === true);

  if (books.length === 0) {
    container.innerHTML = `<p style="color: gray;">No read books yet!</p>`;
    return;
  }

  books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");

    const author = document.createElement("div");
    author.textContent = `Author: ${book.author}`;

    const name = document.createElement("div");
    name.textContent = `Book: ${book.name}`;

    const pages = document.createElement("div");
    pages.textContent = `Pages: ${book.pages}`;

    const status = document.createElement("div");
    status.textContent = "Status: READ";

    const toggleContainer = document.createElement("div");
    toggleContainer.classList.add("toggle-container");
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-sign");
    const toggleInfo = document.createElement("div");
    toggleInfo.classList.add("toggle-info");
    toggleInfo.textContent = "MARK AS UNREAD";

    toggleButton.addEventListener("click", () => {
      book.status = false;
      localStorage.setItem(book.id, JSON.stringify(book));
      renderReadBooks();
    });

    toggleContainer.append(toggleButton, toggleInfo);
    card.append(author, name, pages, status, toggleContainer);

    container.appendChild(card);
  });
}

renderReadBooks();

