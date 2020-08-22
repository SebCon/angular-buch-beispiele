import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  private index = 0;

  constructor() { }

  public insertNewItem(value: string): void {
    this.items.push({
      id: this.index++,
      value
    });
  }

  public getAllItems(): Item[] {
    return [].concat(this.items);
  }
}
