import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

export const LOAD_BOOKS = '[book] load books';
export const WAIT_FOR_BOOKS = '[book] wait for books';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: IBook[]) {}
}

export class WaitForBooks implements Action {
  readonly type = WAIT_FOR_BOOKS;
}

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookData: BookDataService) {}

  @Effect({ dispatch: false })
  loadBooks$ = this.actions$.pipe(
    ofType(WAIT_FOR_BOOKS),
    tap(() => this.bookData.loadBooks())
  );
}

export type IBookActions = LoadBooks | WaitForBooks;
