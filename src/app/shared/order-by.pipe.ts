import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any, field: string): any {
    if (!Array.isArray(array)) {
      return;
    }
    const copy = [...array]
    return copy.sort((a, b) => a[field] - b[field]);
  }
}
