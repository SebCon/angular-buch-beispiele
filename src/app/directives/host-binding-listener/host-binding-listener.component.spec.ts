import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingListenerComponent } from './host-binding-listener.component';

describe('HostBindingListenerComponent', () => {
  let component: HostBindingListenerComponent;
  let fixture: ComponentFixture<HostBindingListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostBindingListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBindingListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
