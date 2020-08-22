import { Component } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {
  public name = 'Sören';
  public someBoys: string[] = [
    'Sebastian',
    'Sven',
    'Tobias',
    'Thomas',
    'Nicolas',
    'Jonas'
  ];
}
