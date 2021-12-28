publicLibrary.view.retrieveAndListAllBooks = {
  setUpUserInterface: function () {
    const tableBodyEl = document.querySelector("table#books>tbody");
    //load all book objects
    Book.retrieveAll();
    //for each book, create a table row with a cell for each attribute
    for (const key of Object.keys(Book.instances)) {
      const book = Book.instances[key];
      const row = tableOfBodyEl.insertRow();
      row.insertCell().textContent = book.isbn;
      row.insertCell().textContent = book.title;
      row.insertCell().textContent = book.year;
    }
  },
};
