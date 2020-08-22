import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-log-events',
  templateUrl: './event-binding-log-events.component.html',
  styleUrls: ['./event-binding-log-events.component.css']
})
export class EventBindingLogEventsComponent  {

  public logEvent($event: any, eventName: string): void {
    console.log('$event', $event);
    console.log('eventName', eventName);
    console.log('----------------------');
  };
}
