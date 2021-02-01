import { IBookActions, LOAD_BOOKS } from './book.actions';
import { bookEntityAdapter, IBookState, initialBookState } from './book.store';

export function booksReducer(
  state = initialBookState,
  action: IBookActions
): IBookState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookEntityAdapter.setAll(action.books, state);

    default: {
      return state;
    }
  }
}
