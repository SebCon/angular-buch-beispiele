import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingComponent } from './two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

describe('TwoWayDataBindingComponent', () => {
  let component: TwoWayDataBindingComponent;
  let fixture: ComponentFixture<TwoWayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindingComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
