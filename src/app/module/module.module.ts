import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompAComponent } from "./comp-a/comp-a.component";
import { CompBComponent } from "./comp-b/comp-b.component";
import { TestDirective } from './test.directive';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [CompAComponent, CompBComponent, TestDirective, TestPipe],
  imports: [CommonModule],
  exports: [CompAComponent, CompBComponent]
})
export class ModuleModule {}
