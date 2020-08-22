import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  templateUrl: './ngif-else.component.html',
  styleUrls: ['./ngif-else.component.css']
})
export class NgifElseComponent {
  public items: string[] = [];

  public addItem(val: string): void {
    this.items.push(val);
  }
}
