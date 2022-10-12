import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter'
})
export class Filter implements PipeTransform {

  // transform(array: any[], search: string, field: string): any[] {
  //   if (!array) return [];
  //   if (!search) return array;
  //   if (search == 'ALL') return array;
  //   search = search.toLocaleLowerCase();
  //   return array.filter(array => {
  //     if (array && array[field]) {
  //       return array[field].toLocaleLowerCase().includes(search);
  //     }
  //     return false;
  //   });
  // }

  transform(array: any[], search: string, field: string): any[] {
    if (!array) return [];
    if (!search) return array;
    if (search == 'ALL') return array;
    search = search.toLocaleLowerCase();
    return array.filter(array => {
      if (array) {
        return array[field].toLocaleLowerCase().includes(search);
      }
      return false;
    });
  }
}
