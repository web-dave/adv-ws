import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'ws-book-detail',
  styleUrls: ['./book-detail.component.scss'],
  templateUrl: 'book-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit, OnDestroy {
  public book$: Observable<Book>;
  i = 1;
  inter: NodeJS.Timeout;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnDestroy(): void {
    clearInterval(this.inter);
  }

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) =>
        this.bookService.getBookByIsbn(params.isbn)
      )
    );
    this.inter = setInterval(() => {
      this.i = 2;
      this.cdr.detectChanges();
    }, 1500);
  }
  format(value: number): string {
    console.log('Format', value);
    return '🦄 ' + value;
  }
}
