import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import CurrentBook from './reducer_current_book';
import SearchBook from './reducer_search_book';

const rootReducer = combineReducers({

  books: BooksReducer,
  currentBook : CurrentBook,
  searchBook : SearchBook

});

export default rootReducer;