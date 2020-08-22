import { Component } from '@angular/core';
import { Book } from './book.interface';
import { Status } from './status.interface';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store-extended.component.html',
  styleUrls: ['./book-store-extended.component.css']
})
export class BookStoreExtendedComponent {
  public books: Book[] = [];
  public book: Book;
  public status: Status = Status.none;

  public onSaveBook(book: Book): void {
    if (this.status === Status.new) {
      this.books.push(book);
    }
    this.status = Status.none;
  }

  public onEditBook(book: Book): void {
    this.book = book;
    this.status = Status.edit;
  }

  public newBook(): void {
    this.book = {
      title: '',
      description: '',
      price: 0
    };
    this.status = Status.new;
  }

  public showBookInput(): boolean {
    return this.status !== Status.none;
  }
}
