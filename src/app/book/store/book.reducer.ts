import { IBookActions, LOAD_BOOKS } from './book.actions';
import { IBookState, initialBookState } from './book.store';

export function booksReducer(
  state = initialBookState,
  action: IBookActions
): IBookState {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.books
      };
    default: {
      return state;
    }
  }
}
