import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  public calculate(x1: number, x2: number): number {
    if (x1 !== undefined && x2 !== undefined) {
      return x1 + x2;
    } else {
      return 0;
    }
  }

  public transformText(text: any): string {
    return `${text}-test`;
  }
}
