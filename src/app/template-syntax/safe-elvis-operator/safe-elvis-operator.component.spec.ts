import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeElvisOperatorComponent } from './safe-elvis-operator.component';

describe('SafeElvisOperatorComponent', () => {
  let component: SafeElvisOperatorComponent;
  let fixture: ComponentFixture<SafeElvisOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeElvisOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeElvisOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
