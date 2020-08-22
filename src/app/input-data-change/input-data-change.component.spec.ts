import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataChangeComponent } from './input-data-change.component';
import { InputDataChangeSetterGetterComponent } from './input-data-change-setter-getter/input-data-change-setter-getter.component';
import { InputDataChangeOnchangeLifecycleComponent } from './input-data-change-onchange-lifecycle/input-data-change-onchange-lifecycle.component';

describe('InputDataChangeComponent', () => {
  let component: InputDataChangeComponent;
  let fixture: ComponentFixture<InputDataChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataChangeComponent, InputDataChangeSetterGetterComponent, InputDataChangeOnchangeLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
