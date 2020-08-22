import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  public isSepia = false;
  public isExpand = false;
  public readonly imageFolder = '/assets/images/';
  public readonly images: string[] = [
    `${this.imageFolder}test1.png`,
    `${this.imageFolder}test2.png`,
    `${this.imageFolder}test3.png`,
  ];

  private imageIndex = 0;
  public currentImage = this.images[this.imageIndex++];

  public getCurrentImageTitle(): string {
    return 'Ich bin ein Infotext von ' + this.currentImage;
  }

  public setNextImage(): void {
    if (this.imageIndex >= this.images.length) {
      this.imageIndex = 0;
    }
    this.currentImage = this.images[this.imageIndex++];
  }

}
