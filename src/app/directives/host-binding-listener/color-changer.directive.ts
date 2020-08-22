import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {
  private readonly colors: string[] = [
    'white',
    'yellow',
    'purple',
    'darksalmon',
    'lightskyblue',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'lightslategrey'
  ];
  private index = 1;
  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('click') newColor() {
    if (this.index + 1 >= this.colors.length) {
      this.index = 0;
    }

    this.bgColor = this.colors[this.index++];
  }
}
