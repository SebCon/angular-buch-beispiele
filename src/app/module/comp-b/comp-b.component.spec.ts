import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBComponent } from './comp-b.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompBComponent', () => {
  let component: CompBComponent;
  let fixture: ComponentFixture<CompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBComponent ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
