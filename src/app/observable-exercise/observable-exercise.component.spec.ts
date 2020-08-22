import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExerciseComponent } from './observable-exercise.component';

describe('ObservableExerciseComponent', () => {
  let component: ObservableExerciseComponent;
  let fixture: ComponentFixture<ObservableExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
