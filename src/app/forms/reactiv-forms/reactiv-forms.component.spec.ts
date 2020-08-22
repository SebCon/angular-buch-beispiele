import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivFormsComponent } from './reactiv-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ReactivFormsComponent', () => {
  let component: ReactivFormsComponent;
  let fixture: ComponentFixture<ReactivFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivFormsComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
