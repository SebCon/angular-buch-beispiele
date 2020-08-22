import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassComponent } from './ngclass.component';
import { FormsModule } from '@angular/forms';

describe('NgclassComponent', () => {
  let component: NgclassComponent;
  let fixture: ComponentFixture<NgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
