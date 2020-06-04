import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 20 ? value.substring(0,20) + '...' : value;
  }

}
