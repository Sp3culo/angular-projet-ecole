import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let transform : string =  value.toLocaleString();
    let array = transform.split(" ", 3)

    return `${array[0]} ${array[1]}`;
  }

}
