import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPreco'
})
export class OrderPrecoPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    if (!array) return [];

    if (array && field == 'crescente') {
      array.sort(function (a, b) { return a.preco - b.preco });
    }

    if (array && field == 'decrescente') {
      array.sort(function (a, b) { return b.preco - a.preco });
    }

    return array;
  }

}