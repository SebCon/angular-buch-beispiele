import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
  styleUrls: ['./ngfor-trackby.component.css']
})
export class NgforTrackbyComponent  {
  public readonly items: Item[] = [
    {id: 1, name: 'Sebastian'},
    {id: 2, name: 'Sabrina'},
    {id: 3, name: 'Carlotta'}
  ];

  public trackByItemId(index: number, item: Item): number {
    return item.id;
  }
}
