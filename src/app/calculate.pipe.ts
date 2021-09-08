import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'calculate',
})
export class CalculatePipe implements PipeTransform {
  @memo()
  transform(value: number, listName: string, name: string): unknown {
    console.log('Calculating:', listName, name, value);
    return fibonacci(value);
  }
}

function fibonacci(value: number): number {
  if (value <= 1) return 1;
  if (value === 2) return 1;
  return fibonacci(value - 1) + fibonacci(value - 2);
}
