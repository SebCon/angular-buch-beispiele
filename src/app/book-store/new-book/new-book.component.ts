import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  @Input() book: Book;
  @Input() edit = false;
  @Output() saveBook: EventEmitter<Book> = new EventEmitter();

  public clickSaveButton(): void {
    this.saveBook.emit({...this.book});
  }

  public isSavable(): boolean {
    return this.book && this.book.title && this.book.description && this.book.price > 0;
  }

  public setBookEmpty(): void {
    this.book = {
      title: '',
      description: '',
      price: 0
    }
  }
}
