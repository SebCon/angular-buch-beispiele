import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationPropVsMethodComponent } from './interpolation-prop-vs-method.component';

describe('InterpolationPropVsMethodComponent', () => {
  let component: InterpolationPropVsMethodComponent;
  let fixture: ComponentFixture<InterpolationPropVsMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationPropVsMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationPropVsMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
