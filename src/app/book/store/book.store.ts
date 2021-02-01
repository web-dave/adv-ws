import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from '../shared/book';

export const bookEntityAdapter = createEntityAdapter<IBook>({
  selectId: (book: IBook) => book.isbn
});

export const bookStoreName = 'bookStoreName';

export type IBookState = EntityState<IBook>;

export const initialBookState: IBookState = bookEntityAdapter.getInitialState();

const { selectAll, selectEntities } = bookEntityAdapter.getSelectors();

export const getBooksSelector = createSelector(
  createFeatureSelector(bookStoreName),
  selectAll
);
export const getBookSelector = (isbn: string) =>
  createSelector(
    createFeatureSelector(bookStoreName),
    (state: IBookState) => selectEntities(state)[isbn]
  );
