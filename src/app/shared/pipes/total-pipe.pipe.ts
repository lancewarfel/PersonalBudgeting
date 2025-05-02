import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPipe',
  standalone: true
})
export class TotalPipe implements PipeTransform {
  transform<T>(records: T[], key: keyof T, round: number = 2) {
    let total = records.reduce((acc, record) => (acc + (record[key] as unknown as number)), 0);
    if (round) {
      return total.toFixed(round);
    }
    return total;
  }
}
