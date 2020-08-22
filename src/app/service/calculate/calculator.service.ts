import { Injectable } from '@angular/core';
import { CalcSymbols } from './calc-symbols.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public execute(val1: number, val2: number, symbol: CalcSymbols): number {
    switch (symbol) {
      case CalcSymbols.sub:
        return val1 - val2;
        break;
      default:
      case CalcSymbols.add:
        return val1 + val2;
        break;
    }
  }
}
