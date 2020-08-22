import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  Input,
  DoCheck
} from "@angular/core";

@Component({
  selector: "app-lifecycle-hooks",
  templateUrl: "./lifecycle-hooks.component.html",
  styleUrls: ["./lifecycle-hooks.component.css"]
})
export class LifecycleHooksComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy {

  @Input() a: string;
  @Input() b: string;

  constructor() {
    console.log("constructor - value a", this.a);
  }

  ngOnInit(): void {
    console.log("ngOnInit - value a", this.a);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
