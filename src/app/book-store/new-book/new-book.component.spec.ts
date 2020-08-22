import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewBookComponent } from './new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
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
