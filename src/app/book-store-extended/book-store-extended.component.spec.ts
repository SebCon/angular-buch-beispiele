import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreExtendedComponent } from './book-store-extended.component';
import { NewBookExtendedComponent } from './new-book-extended/new-book-extended.component';
import { BookListExtendedComponent } from './book-list-extended/book-list-extended.component';
import { FormsModule } from '@angular/forms';

describe('BookStoreComponent', () => {
  let component: BookStoreExtendedComponent;
  let fixture: ComponentFixture<BookStoreExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookStoreExtendedComponent, NewBookExtendedComponent, BookListExtendedComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookStoreExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
