import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-data-change-setter-getter',
  templateUrl: './input-data-change-setter-getter.component.html',
  styleUrls: ['./input-data-change-setter-getter.component.css']
})
export class InputDataChangeSetterGetterComponent {
  @Input() 
  set a(val: string) {
    this._a = val;
    this.doSomethingWithA();
  }

  get a(): string {
    return this._a;
  }

  @Input() 
  set b(val: string) {
    this._b = val;
    this.doSomethingWithB();
  }

  get b(): string {
    return this._b;
  }

  private _a = '';
  private _b = '';

  public doSomethingWithA(): void {
    console.log('change mit a', this._a);
  }

  public doSomethingWithB(): void {
    console.log('change mit b', this._b);
  }
}
