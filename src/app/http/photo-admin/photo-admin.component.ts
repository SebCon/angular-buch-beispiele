import { Component, OnInit } from "@angular/core";
import { Photo } from "./photo.interface";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

@Component({
  selector: "app-photo-admin",
  templateUrl: "./photo-admin.component.html",
  styleUrls: ["./photo-admin.component.css"]
})
export class PhotoAdminComponent implements OnInit {
  public photos$: Observable<Photo[]>;
  public response: Response | Photo;
  private readonly URL = "https://jsonplaceholder.typicode.com/photos";
  private readonly httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.photos$ = this.getAllPhotos$();
  }

  public onClickDelete(photo: Photo): void {
    this.http
      .delete<Photo>(`${this.URL}/${photo.id}`, this.httpOptions)
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(response => (this.response = response));
  }

  public onClickUpdate(photo: Photo): void {
    photo.title += ' - update Photo';
    this.http
      .put<Photo>(`${this.URL}/${photo.id}`, photo, this.httpOptions)
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(response => (this.response = response));
  }

  public onClickCreate(photo: Photo): void {
    const newPhoto: Photo = {
      albumId: photo.albumId,
      title: photo.title + " - neus Photo",
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl
    };

    this.http
      .post<Photo>(`${this.URL}/`, newPhoto, this.httpOptions)
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(response => (this.response = response));
  }

  public getAllPhotos$(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(this.URL, this.httpOptions)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
