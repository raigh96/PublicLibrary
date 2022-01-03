publicLibrary.view.updateBook = {
  setUpUserInterface: function () {
    const formEl = document.forms["Book"],
      saveButton = formEl.commit,
      selectBookEl = formEl.selectBook;
    Book.retrieveAll();
    for (const key of Object.keys(Book.instances)) {
      const book = Book.instances[key];
      const optionEl = document.createElement("option");
      optionEl.text = book.title;
      optionEl.value = book.isbn;
      selectBookEl.add(optionEl, null);
    }
    selectBookEl.addEventListener(
      "change",
      publicLibrary.view.updateBook.handleBookSelectionEvent
    );
    saveButton.addEventListener(
      "click",
      publicLibrary.view.updateBook.handleSavebuttonClickEvent
    );
    window.addEventListener("beforeunload", Book.SaveAll);
  },
  handleBookSelectionEvent: function () {
    const formEl = document.forms["Book"],
      selectBookEl = formEl.selectBook,
      key = selectBookEl.value;
    if (key) {
      const book = Book.instances[key];
      formEl.isbn.value = book.isbn;
      formEl.title.value = book.title;
      formEl.year.value = book.year;
    } else {
      formEl.reset();
    }
  },
  handleSavebuttonClickEvent: function () {
    const formEl = document.forms["Book"],
      selectBookEl = formEl.selectBook;
    const slots = {
      isbn: formEl.isbn.value,
      title: formEl.title.value,
      year: formEl.year.value,
    };
    Book.update(slots);
    selectBookEl.options[selectBookEl.selectedIndex].text = slots.title;
    formEl.reset();
  },
};
