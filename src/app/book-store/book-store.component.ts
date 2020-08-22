import { Component } from '@angular/core';
import { Book } from './book.interface';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent {
  public bookData: Book;
  public edit = false;

  public onSaveBook(book: Book): void {
    this.bookData = book;
    this.edit = false;
  }

  public onEditBook(edit: boolean): void {
    this.edit = edit;
  }

  public getBookClone(): Book {
    return {...this.bookData};
  }
}
