import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, count: number): string {
    const _COUNT = count !== undefined ? count : 2;
    let result = '';

    if (value) {
      for (let i = 0; i < _COUNT; i++) {
        result += ` ${value}`;
      }
    }
    return result;
  }

}
