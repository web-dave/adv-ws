import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicorn'
})
export class UnicornPipe implements PipeTransform {
  transform(value: number): string {
    console.log('Pipe', value);
    return '🦄 ' + value;
  }
}
