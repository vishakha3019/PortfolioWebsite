import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true,
})
export class JoinPipe implements PipeTransform {
  transform(items: string[] | null | undefined, separator = ', '): string {
    return items?.join(separator) ?? '';
  }
}
