import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from '../shared/book';

export const bookStoreName = 'bookStoreName';

export interface IBookState {
  books: IBook[];
}

export const initialBookState: IBookState = {
  books: []
};

export const getBooksSelector = createSelector(
  createFeatureSelector(bookStoreName),
  (state: IBookState) => state.books
);
