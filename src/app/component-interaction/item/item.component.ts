import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  @Input() product: Product;
  @Input() isSold: boolean;
  @Output() readonly buyProduct: EventEmitter<Product> = new EventEmitter();

  public clickButton(): void {
    this.buyProduct.emit(this.product);
  }
}
