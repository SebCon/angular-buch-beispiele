import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataChangeSetterGetterComponent } from './input-data-change-setter-getter.component';

describe('InputDataChangeSetterGetterComponent', () => {
  let component: InputDataChangeSetterGetterComponent;
  let fixture: ComponentFixture<InputDataChangeSetterGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataChangeSetterGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataChangeSetterGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
