import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBComponent } from './comp-b.component';
import { FormsModule } from '@angular/forms';

describe('CompBComponent', () => {
  let component: CompBComponent;
  let fixture: ComponentFixture<CompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBComponent ],
      imports: [FormsModule]
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
