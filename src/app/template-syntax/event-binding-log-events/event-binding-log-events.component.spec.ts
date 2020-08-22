import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingLogEventsComponent } from './event-binding-log-events.component';

describe('EventBindingLogEventsComponent', () => {
  let component: EventBindingLogEventsComponent;
  let fixture: ComponentFixture<EventBindingLogEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingLogEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingLogEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
