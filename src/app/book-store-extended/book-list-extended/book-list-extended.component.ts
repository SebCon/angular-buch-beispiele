import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-list-extended',
  templateUrl: './book-list-extended.component.html',
  styleUrls: ['./book-list-extended.component.css']
})
export class BookListExtendedComponent {
  @Input() book: Book;
  @Output() editBook: EventEmitter<Book> = new EventEmitter();

  public clickEditButton(): void {
    this.editBook.emit(this.book);
  }
}
