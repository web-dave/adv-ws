import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookListComponent implements OnInit, DoCheck {
  books$: Observable<Book[]>;
  books: Book[] = [];
  e = fromEvent(document.querySelector('h3'), 'mousemove');
  a = 1;

  constructor(
    private bookData: BookDataService,
    private cdr: ChangeDetectorRef
  ) {}
  ngDoCheck(): void {
    console.log('ökjsdcökdsj');
  }

  ngOnInit() {
    this.books$ = this.bookData.getBooks().pipe(tap(console.log));
    // this.books$.subscribe(data => this.setBooks(data));

    this.e.pipe(filter(data => this.a >= 2));
  }

  setBooks(data: Book[]) {
    this.books = data;
    this.cdr.detectChanges();
  }
  trackIT(i, itm) {
    return itm.isbn;
  }
}
