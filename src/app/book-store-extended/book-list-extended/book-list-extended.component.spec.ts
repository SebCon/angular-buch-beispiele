import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListExtendedComponent } from './book-list-extended.component';

describe('BookListComponent', () => {
  let component: BookListExtendedComponent;
  let fixture: ComponentFixture<BookListExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
