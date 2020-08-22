import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  public items: Item[] = [];

  constructor(private readonly itemService: ItemService) {
    this.items = this.itemService.getAllItems();
  }

  public trackByItemId(index: number, item: Item): number {
    return item.id;
  }

  public getAllItems(): Item[] {
    return this.itemService.getAllItems();
  }

}
