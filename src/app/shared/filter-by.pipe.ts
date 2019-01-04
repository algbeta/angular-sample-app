import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: any, searchString: string): any {
    if (!Array.isArray(array)) {
      return;
    }
    if (!searchString) {
      return array;
    }

    const filteredArray = array.filter(item => {
      const title = item.title.toLowerCase();
      const searchStr = searchString.toLowerCase();
      return title.indexOf(searchStr) !== -1
    });
    return filteredArray;
  }

}
