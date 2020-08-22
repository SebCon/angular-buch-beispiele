import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UppercaseComponent } from "./uppercase/uppercase.component";
import { LowercaseComponent } from "./lowercase/lowercase.component";
import { SliceComponent } from "./slice/slice.component";
import { JsonComponent } from "./json/json.component";
import { PercentComponent } from "./percent/percent.component";
import { CurrencyComponent } from "./currency/currency.component";
import { AsyncComponent } from "./async/async.component";
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { ExtendedRoutes } from '../app-routing.module';
import { DecimalComponent } from './decimal/decimal.component';
import { DateComponent } from './date/date.component';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';
import { MyPipePipe } from './custom/my-pipe.pipe';
import { CustomComponent } from './custom/custom.component';
import { FormsModule } from '@angular/forms';

export const pipeRoutes: ExtendedRoutes[] = [
  {
    path: "pipes",
    title: 'Pipes',
    children: [
      {
        path: "uppercase",
        component: UppercaseComponent,
        title: 'UpperCasePipe'
      },
      {
        path: "lowercase",
        component: LowercaseComponent,
        title: 'LowerCasePipe'
      },
      {
        path: "titlecase",
        component: TitlecaseComponent,
        title: 'TitleCasePipe'
      },
      {
        path: "slice",
        component: SliceComponent,
        title: 'SlicePipe'
      },
      {
        path: "json",
        component: JsonComponent,
        title: 'JSON-Pipe'
      },
      {
        path: "decimal",
        component: DecimalComponent,
        title: 'DecimalPipe'
      },
      {
        path: "date",
        component: DateComponent,
        title: 'DatePipe'
      },
      {
        path: "percent",
        component: PercentComponent,
        title: 'PercentPipe'
      },
      {
        path: "currency",
        component: CurrencyComponent,
        title: 'CurrencyPipe'
      },
      {
        path: "async",
        component: AsyncComponent,
        title: 'AsyncPipe'
      },
      {
        path: "custom",
        component: CustomComponent,
        title: 'Custom Pipe'
      }
    ] as ExtendedRoutes[]
  }
];

@NgModule({
  declarations: [
    UppercaseComponent,
    LowercaseComponent,
    SliceComponent,
    JsonComponent,
    PercentComponent,
    CurrencyComponent,
    AsyncComponent,
    TitlecaseComponent,
    DecimalComponent,
    DateComponent,
    KeyvalueComponent,
    MyPipePipe,
    CustomComponent
  ],
  imports: [CommonModule, FormsModule]
})
export class PipesModule {}
