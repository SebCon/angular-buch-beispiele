import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFlightBookingComponent } from './exercise-flight-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ExerciseFlightBookingComponent', () => {
  let component: ExerciseFlightBookingComponent;
  let fixture: ComponentFixture<ExerciseFlightBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFlightBookingComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
