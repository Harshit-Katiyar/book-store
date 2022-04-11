export function selectBook(book){
    return {
      type: 'CURRENT_BOOK',
      payload: book
    }
  };