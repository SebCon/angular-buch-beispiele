import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InterpolationPropVsMethodComponent } from "./interpolation-prop-vs-method/interpolation-prop-vs-method.component";
import { SafeElvisOperatorComponent } from "./safe-elvis-operator/safe-elvis-operator.component";
import { TemplateSyntaxComponent } from "./template-syntax.component";
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { EventBindingLogEventsComponent } from './event-binding-log-events/event-binding-log-events.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { ExtendedRoutes } from '../app-routing.module';
import { ElementReferenceComponent } from './element-reference/element-reference.component';

export const templateSyntaxRoutes: ExtendedRoutes[] = [
  {
    path: 'template-syntax',
    title: 'Template-Syntax',
    children: [
      {
        path: 'interpolation',
        component: InterpolationComponent,
        title: 'Interpolation'
      },
      {
        path: 'safe-elvis-operator',
        component: SafeElvisOperatorComponent,
        title: 'Safe Navigation Operator'
      },
      {
        path: 'property-binding',
        component: PropertyBindingComponent,
        title: 'Property-Binding'
      },
      {
        path: 'event-binding',
        component: EventBindingComponent,
        title: 'Event-Binding'
      },
      {
        path: 'event-binding-log-events',
        component: EventBindingLogEventsComponent,
        title: 'Event-Binding Beispiele mit Konsolen-Logs'
      },
      {
        path: 'two-way-data-binding',
        component: TwoWayDataBindingComponent,
        title: 'Two-Way-Databinding'
      },
      {
        path: 'element-reference',
        component: ElementReferenceComponent,
        title: 'Elementreferenz'
      },
      {
        path: 'template-syntax-image-gallery',
        title: 'Template-Syntax Image-Gallery',
        component: ImageGalleryComponent
      }
    ] as ExtendedRoutes[]
  }
];
@NgModule({
  declarations: [
    InterpolationPropVsMethodComponent,
    SafeElvisOperatorComponent,
    TemplateSyntaxComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ImageGalleryComponent,
    EventBindingLogEventsComponent,
    TwoWayDataBindingComponent,
    ElementReferenceComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    InterpolationPropVsMethodComponent,
    SafeElvisOperatorComponent,
    TemplateSyntaxComponent
  ]
})
export class TemplateSyntaxModule {}
