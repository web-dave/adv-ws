import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { bookStoreName } from '../store/book.store';

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
    this.books$ = this.store.select(state => state[bookStoreName].books);
  }
}
