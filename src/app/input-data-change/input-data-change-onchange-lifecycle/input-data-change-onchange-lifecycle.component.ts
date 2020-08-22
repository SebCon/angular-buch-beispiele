import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-input-data-change-onchange-lifecycle',
  templateUrl: './input-data-change-onchange-lifecycle.component.html',
  styleUrls: ['./input-data-change-onchange-lifecycle.component.css']
})
export class InputDataChangeOnchangeLifecycleComponent implements OnChanges {
  @Input() a = '';
  @Input() b = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.a) {
      this.doSomethingWithA(changes.a);
    }

    if (changes.b) {
      this.doSomethingWithB(changes.b);
    }
  }

  public doSomethingWithA(change: SimpleChange): void {
    console.log('change mit a', change.currentValue);
  }

  public doSomethingWithB(change: SimpleChange): void {
    console.log('change mit b', change.currentValue);
  }

}
