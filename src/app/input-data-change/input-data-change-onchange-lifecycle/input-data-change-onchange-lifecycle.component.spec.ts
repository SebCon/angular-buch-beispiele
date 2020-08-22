import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataChangeOnchangeLifecycleComponent } from './input-data-change-onchange-lifecycle.component';

describe('InputDataChangeOnchangeLifecycleComponent', () => {
  let component: InputDataChangeOnchangeLifecycleComponent;
  let fixture: ComponentFixture<InputDataChangeOnchangeLifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataChangeOnchangeLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataChangeOnchangeLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
