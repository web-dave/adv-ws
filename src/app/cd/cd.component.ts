import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ws-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdComponent implements OnInit {
  @Input() item: { x: number; y: number };
  active = false;
  constructor() {}

  ngOnInit(): void {}
  move(e: MouseEvent) {
    this.item.x = e.x;
    this.item.y = e.y;
  }
}
