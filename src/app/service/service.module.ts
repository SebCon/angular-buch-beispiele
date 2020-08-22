import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalculateComponent } from "./calculate/calculate.component";
import { ServiceComponent } from "./include-service/service.component";
import { CompAComponent } from "./include-service/comp-a/comp-a.component";
import { CompBComponent } from "./include-service/comp-b/comp-b.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculateComponent,
    ServiceComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [CommonModule, FormsModule]
})
export class ServiceModule {}
