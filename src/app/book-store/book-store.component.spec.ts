import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreComponent } from './book-store.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BookStoreComponent', () => {
  let component: BookStoreComponent;
  let fixture: ComponentFixture<BookStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStoreComponent, BookListComponent, NewBookComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStoreComponent);
    component = fixture.componentInstance;
    component.bookData = {
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
