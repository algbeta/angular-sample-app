import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinuteToHoursPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes: number = Math.floor(value % 60);
    return `${hours}h ${minutes}mins`;
  }
}
