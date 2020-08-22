import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDataChangeModule } from './input-data-change/input-data-change.module';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks-component';
import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ItemComponent } from './component-interaction/item/item.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { NewBookComponent } from './book-store/new-book/new-book.component';
import { BookListComponent } from './book-store/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookStoreExtendedComponent } from './book-store-extended/book-store-extended.component';
import { NewBookExtendedComponent } from './book-store-extended/new-book-extended/new-book-extended.component';
import { DirectivesModule } from './directives/directives.module';
import { BookListExtendedComponent } from './book-store-extended/book-list-extended/book-list-extended.component';
import { MouseHoverDirective } from './book-store-extended/mouse-hover.directive';
import { ServiceModule } from './service/service.module';
import { RoutingModule } from './routing/routing.module';
import { PipesModule } from './pipes/pipes.module';
import { ObservableComponent } from './observable/observable.component';
import { ObservableExerciseComponent } from './observable-exercise/observable-exercise.component';
import { FormulareModule } from './forms/formulare.module';
import { HttpModule } from './http/http.module';
import { TestsModule } from './tests/tests.module';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ComponentInteractionComponent,
    ItemComponent,
    BookStoreComponent,
    BookStoreExtendedComponent,
    NewBookComponent,
    NewBookExtendedComponent,
    BookListComponent,
    BookListExtendedComponent,
    MouseHoverDirective,
    ObservableComponent,
    ObservableExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputDataChangeModule,
    TemplateSyntaxModule,
    FormsModule,
    DirectivesModule,
    ServiceModule,
    RoutingModule,
    PipesModule,
    FormulareModule,
    HttpModule,
    TestsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
