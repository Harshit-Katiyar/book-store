export function searchBook(book){
    return {
      type: 'SEARCH_BOOK',
      payload: book
    }
  };