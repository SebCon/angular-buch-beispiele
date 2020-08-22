import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {
  public result = 0;

  public add(val: number): void {
    this.result += val;
  }

  public doSomething($event: any): void {
    console.log('$event', $event);
  }
}
