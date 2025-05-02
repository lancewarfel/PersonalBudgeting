import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent',
  standalone: true
})
export class PercentPipe implements PipeTransform {

  transform(value1: any, value2: number, round = 2): string {
    return (value1 / value2 * 100).toFixed(round) + '%';
  }

}
