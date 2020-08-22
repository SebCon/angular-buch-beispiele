import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { FormsModule } from '@angular/forms';
import { ExtendedRoutes } from '../app-routing.module';

export const testRoutes: ExtendedRoutes[] = [
  {
    path: 'testing',
    title: 'Komponenten-Testing',
    component: ComponentTestComponent
  }
];

@NgModule({
  declarations: [ComponentTestComponent, TestsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TestsModule { }
