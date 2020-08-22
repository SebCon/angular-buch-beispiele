import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  public readonly items: string[] = [
    'Sebastian',
    'Sabrina',
    'Carlotta'
  ];

  public addItem(val: string): void {
    this.items.push(val);
  }
}
