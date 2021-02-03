import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  items: { x: number; y: number }[] = [];
  constructor() {
    // for (let i = 0; i <= 5000; i++) {
    //   const itm = {
    //     x: Math.floor(Math.random() * 100),
    //     y: Math.floor(Math.random() * 100)
    //   };
    //   this.items.push(itm);
    // }
  }
}
