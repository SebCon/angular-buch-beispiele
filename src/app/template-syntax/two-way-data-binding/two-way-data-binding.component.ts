import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  public myVariable = 'Hallo';

  public fakeSaveAndReset(): void {
    console.log('myVariable', this.myVariable);
    this.myVariable = 'Gespeichert';
  }
}
