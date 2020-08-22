import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {
  @HostBinding('style.border') border: string;
  @HostListener('mouseover') setBorder() {
    this.border = '2px solid #A9A9A9';
  }
  @HostListener('mouseout') unsetBorder() {
    this.border = '2px solid #fff';
  }
}
