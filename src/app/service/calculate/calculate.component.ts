import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { CalcSymbols } from './calc-symbols.interface';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  public value1 = 0;
  public value2 = 0;
  public result = 0;
  public symbol: CalcSymbols = CalcSymbols.add;

  constructor(private readonly calculatorService: CalculatorService) { }

  public calculate(): void {
    this.result = this.calculatorService.execute(this.value1, this.value2, this.symbol);
  }

}
