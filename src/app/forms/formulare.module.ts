import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactivFormsComponent } from './reactiv-forms/reactiv-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExtendedRoutes } from '../app-routing.module';
import { ExerciseFlightBookingComponent } from './exercise-flight-booking/exercise-flight-booking.component';

export const formulareRoutes: ExtendedRoutes[] = [
  {
    path: 'formulare',
    title: 'Formulare',
    children: [
      {
        path: 'form-template-drive',
        component: TemplateDrivenComponent,
        title: 'Template-Driven Formular'
      },
      {
        path: 'reactive-forms',
        component: ReactivFormsComponent,
        title: 'Reaktive Formulare'
      },
      {
        path: 'exercise-forms',
        component: ExerciseFlightBookingComponent,
        title: 'Formular Flugbuchung'
      }
    ] as ExtendedRoutes[]
  }
];

@NgModule({
  declarations: [TemplateDrivenComponent, ReactivFormsComponent, ExerciseFlightBookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormulareModule { }
