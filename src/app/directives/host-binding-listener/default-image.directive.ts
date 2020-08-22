import { Directive, HostBinding, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements AfterContentInit {
  @HostBinding('src') imageSrc: string;

  constructor() { }

  ngAfterContentInit(): void {
    if (!this.imageSrc) {
      this.imageSrc = 'https://picsum.photos/300/200';
    }
    console.log('imageSrc', this.imageSrc);
  }

}
