import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgifComponent } from "./ngif/ngif.component";
import { NgifElseComponent } from "./ngif-else/ngif-else.component";
import { NgswitchComponent } from "./ngswitch/ngswitch.component";
import { FormsModule } from "@angular/forms";
import { NgforComponent } from "./ngfor/ngfor.component";
import { NgforTrackbyComponent } from "./ngfor-trackby/ngfor-trackby.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { NgstyleComponent } from "./ngstyle/ngstyle.component";
import { HighlightDirective } from "./my-directive/highlight.directive";
import { MyDirectiveComponent } from "./my-directive/my-directive.component";
import { HostBindingListenerComponent } from './host-binding-listener/host-binding-listener.component';
import { ColorChangerDirective } from './host-binding-listener/color-changer.directive';
import { DefaultImageDirective } from './host-binding-listener/default-image.directive';
import { ExtendedRoutes } from '../app-routing.module';

export const directivesRoutes: ExtendedRoutes[] = [
  {
    path: 'directives',
    title: 'Direktiven',
    children: [
      {
        path: 'ngif',
        component: NgifComponent,
        title: '*ngIf'
      },
      {
        path: 'ngif-else',
        component: NgifElseComponent,
        title: '*ngIf mit else-Block'
      },
      {
        path: 'ngswitch',
        component: NgswitchComponent,
        title: '[ngswitch]'
      },
      {
        path: 'ngfor',
        component: NgforComponent,
        title: '*ngFor'
      },
      {
        path: 'ngfor-trackby',
        component: NgforTrackbyComponent,
        title: '*ngFor trackBy'
      },
      {
        path: 'ngclass',
        component: NgclassComponent,
        title: '[ngClass]'
      },
      {
        path: 'ngstyle',
        component: NgstyleComponent,
        title: '[ngStyle]'
      },
      {
        path: 'my-directive',
        component: MyDirectiveComponent,
        title: 'Eigene Direktive implementieren - HighLight'
      },
      {
        path: 'host-binding-listener',
        component: HostBindingListenerComponent,
        title: 'HostListener und HostBinding - ColorChanger und DefaultImage'
      },
    ] as ExtendedRoutes[]
  }
];

@NgModule({
  declarations: [
    NgifComponent,
    NgifElseComponent,
    NgswitchComponent,
    NgforComponent,
    NgforTrackbyComponent,
    NgclassComponent,
    NgstyleComponent,
    HighlightDirective,
    MyDirectiveComponent,
    HostBindingListenerComponent,
    ColorChangerDirective,
    DefaultImageDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [ColorChangerDirective, NgifComponent]
})
export class DirectivesModule {}
