export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to returna an action an object
  // with type peoperty
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
