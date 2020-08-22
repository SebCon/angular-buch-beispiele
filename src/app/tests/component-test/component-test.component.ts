import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent {
  @Input() text: string;
  public placeholder = 'schreib was';
  public value: string;
}
