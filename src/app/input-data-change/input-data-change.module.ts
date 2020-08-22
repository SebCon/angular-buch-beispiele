import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputDataChangeOnchangeLifecycleComponent } from "./input-data-change-onchange-lifecycle/input-data-change-onchange-lifecycle.component";
import { InputDataChangeSetterGetterComponent } from "./input-data-change-setter-getter/input-data-change-setter-getter.component";
import { InputDataChangeComponent } from "./input-data-change.component";

@NgModule({
  declarations: [
    InputDataChangeOnchangeLifecycleComponent,
    InputDataChangeSetterGetterComponent,
    InputDataChangeComponent
  ],
  imports: [CommonModule]
})
export class InputDataChangeModule {}
