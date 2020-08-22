import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./posts.interface";

@Component({
  selector: "app-posts-admin",
  templateUrl: "./posts-admin.component.html",
  styleUrls: ["./posts-admin.component.css"]
})
export class PostsAdminComponent implements OnInit {
  public posts$: Observable<Post[]>;
  private readonly URL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.posts$ = this.getAllPosts$();
  }

  public onClickDelete(post: Post): void {
    this.http
      .delete<Post>(`${this.URL}/${post.id}`)
      .subscribe(response => console.log(response));
  }

  public onClickUpdate(post: Post): void {
    post.title = "update Post";
    this.http
      .put<Post>(`${this.URL}/${post.id}`, post)
      .subscribe(response => console.log(response));
  }

  public onClickCreate(post: Post): void {
    post.title = "create new post";
    delete post.id;

    this.http
      .post<Post>(`${this.URL}/`, post)
      .subscribe(response => console.log(response));
  }

  public getAllPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL);
  }
}
