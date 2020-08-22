import { Component } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {
  public count = 0;
  public readonly MAX_COUNT = 3;
  public products: Product[] = [
    {
      title: 'Seich Ponyhof',
      description: 'Ein einzigartiger Ponyhof mit Waschstrasse von Seich',
    },
    {
      title: 'Plagomboil Villa',
      description: 'eine schöne große Villa mit Einrichtung von Plagomboil'
    }
  ];

  public isSold(): boolean {
    return this.count >= this.MAX_COUNT;
  }

  public onBuyProduct(): void {
    this.count++;
  }

}
