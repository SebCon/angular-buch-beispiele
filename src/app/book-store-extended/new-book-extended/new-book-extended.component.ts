import { Component, Output, EventEmitter, Input} from '@angular/core';
import { Book } from '../book.interface';
import { Status } from '../status.interface';

@Component({
  selector: 'app-new-book-extended',
  templateUrl: './new-book-extended.component.html',
  styleUrls: ['./new-book-extended.component.css']
})
export class NewBookExtendedComponent {
  @Input() book: Book;
  @Input() status: Status;
  @Input() id: string;
  @Output() saveBook: EventEmitter<Book> = new EventEmitter();
  public readonly STATUS = Status;

  public clickSaveButton(): void {
    this.saveBook.emit(this.book);
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
