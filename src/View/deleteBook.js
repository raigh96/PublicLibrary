publicLibrary.view.deleteBook = {
  setupUserInterface: function () {
    var deleteButton = document.forms["Book"].commit;
    var selectEl = document.forms["Book"].selectBook;
    var key = "",
      keys = [],
      book = null,
      optionEl = null,
      i = 0;
    Book.retrieveAll();
    keys = Object.keys(Book.instances);
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      book = Book.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = book.title;
      optionEl.value = book.isbn;
      selectEl.add(optionEl, null);
    }
    deleteButton.addEventListener(
      "click",
      pl.v.deleteBook.handleDeleteButtonClickEvent
    );
    window.addEventListener("beforeunload", Book.saveAll);
  },
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms["Book"].selectBook;
    var isbn = selectEl.value;
    if (isbn) {
      Book.destroy(isbn);
      selectEl.remove(selectEl.selectedIndex);
    }
  },
};
