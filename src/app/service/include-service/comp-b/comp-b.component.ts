import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
  public value: string;

  constructor(private readonly itemService: ItemService) {
  }

  public clickSaveButton() {
    this.itemService.insertNewItem(this.value);
    this.value = '';
  }

}
