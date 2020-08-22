import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookExtendedComponent } from './new-book-extended.component';
import { FormsModule } from '@angular/forms';

describe('NewBookComponent', () => {
  let component: NewBookExtendedComponent;
  let fixture: ComponentFixture<NewBookExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookExtendedComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookExtendedComponent);
    component = fixture.componentInstance;
    component.book = {
      title: 'test',
      description: 'nur ein test',
      price: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
