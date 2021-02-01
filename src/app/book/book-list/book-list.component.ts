import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { WaitForBooks } from '../store/book.actions';
import { bookStoreName, getBooksSelector } from '../store/book.store';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  // constructor(private bookData: BookDataService) {}
  constructor(private store: Store<{}>) {}

  ngOnInit() {
    // this.bookData.loadBooks();
    this.books$ = this.store
      .select(getBooksSelector)
      .pipe(tap(state => console.log(state)));
    // setInterval(() => {
    //   this.store.dispatch({ type: 'TEST IT' });
    // }, 1500);
  }
}
