import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WaitForBooks } from './store/book.actions';

@Component({
  selector: 'ws-book',
  templateUrl: './book.component.html'
})
export class BookComponent {
  constructor(private store: Store) {
    this.store.dispatch(new WaitForBooks());
  }
}
