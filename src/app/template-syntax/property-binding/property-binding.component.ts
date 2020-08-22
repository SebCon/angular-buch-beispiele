import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  public readonly imageFolder = '/assets/images/';
  public readonly currentImage = `${this.imageFolder}test1.png`;
  public isDisabled = true;

  public getCurrentImageTitle(): string {
    return 'Ich bin ein Infotext von ' + this.currentImage;
  }
}
