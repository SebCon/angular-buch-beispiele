import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interpolation-prop-vs-method',
  templateUrl: './interpolation-prop-vs-method.component.html',
  styleUrls: ['./interpolation-prop-vs-method.component.css']
})
export class InterpolationPropVsMethodComponent {
  @Input()
  set a(val: number) {
    this._a = val;
  }

  get a() {
    console.log('get a: ', this._a);
    return this._a;
  }

  @Input() b: number;

  private _a = 0;
  private _b = 0;

  public getValue(): number {
    console.log('get b: ', this._b);
    return this._b;
  }

  public addValue(val: number) {
    console.log('---------------------');
    this._b += val;
    this.a += val;
  }

}
