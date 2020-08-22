import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponent } from './calculate.component';
import { CalculatorService } from './calculator.service';
import { FormsModule } from '@angular/forms';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateComponent ],
      imports: [FormsModule],
      providers: [CalculatorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
