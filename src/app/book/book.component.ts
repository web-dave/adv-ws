import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ws-book',
  templateUrl: './book.component.html'
})
export class BookComponent {
  constructor(router: Router) {
    router.initialNavigation();
  }
}
