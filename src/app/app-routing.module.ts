import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { InputDataChangeComponent } from './input-data-change/input-data-change.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks-component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookStoreExtendedComponent } from './book-store-extended/book-store-extended.component';
import { ServiceComponent } from './service/include-service/service.component';
import { CalculateComponent } from './service/calculate/calculate.component';
import { exampleRoutingRoutes } from './routing/routing.module';
import { directivesRoutes } from './directives/directives.module';
import { templateSyntaxRoutes } from './template-syntax/template-syntax.module';
import { pipeRoutes } from './pipes/pipes.module';
import { ObservableComponent } from './observable/observable.component';
import { ObservableExerciseComponent } from './observable-exercise/observable-exercise.component';
import { formulareRoutes } from './forms/formulare.module';
import { httpRoutes } from './http/http.module';
import { testRoutes } from './tests/tests.module';

export interface ExtendedRoutes extends Route {
  title?: string;
}

export const routes: ExtendedRoutes[] = [
  {
    path: 'lifecycles',
    component: LifecycleHooksComponent,
    title: 'Lifecycles'
  },
  {
    path: 'input-data-change',
    component: InputDataChangeComponent,
    title: 'Datenaktualisierung mit OnChanges oder setter/getter'
  },
  {
    path: 'component-interaction',
    title: 'Komponenten-Interaktion',
    component: ComponentInteractionComponent
  },
  {
    path: 'book-store',
    title: 'Book-Store',
    component: BookStoreComponent
  },
  {
    path: 'book-store-extended',
    title: 'Book-Store [ERWEITERT]',
    component: BookStoreExtendedComponent
  },
  {
    path: 'services',
    title: 'Service',
    component: ServiceComponent
  },
  {
    path: 'services-example',
    title: 'Services example',
    component: CalculateComponent
  },
  ...templateSyntaxRoutes,
  ...directivesRoutes,
  ...exampleRoutingRoutes,
  ...pipeRoutes,
  {
    path: 'observable',
    title: 'Observable',
    component: ObservableComponent
  },
  {
    path: 'observable-exercise',
    title: 'Observable Exercise',
    component: ObservableExerciseComponent
  },
  ...formulareRoutes,
  ...httpRoutes,
  ...testRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
