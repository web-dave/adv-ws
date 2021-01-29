import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookData.getBooks();
  }
}
