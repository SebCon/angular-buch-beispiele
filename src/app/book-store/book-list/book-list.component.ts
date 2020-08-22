import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() book: Book;
  @Output() editBook: EventEmitter<boolean> = new EventEmitter();

  public clickEditButton(): void {
    this.editBook.emit(true);
  }
}
