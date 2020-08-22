import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Observer, Subscription, of } from "rxjs";
import { map, catchError, filter } from "rxjs/operators";
@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.css"]
})
export class ObservableComponent implements OnInit, OnDestroy {
  public myObservable$: Observable<number>;
  public subscription: Subscription;

  constructor() {
    this.myObservable$ = new Observable((observer: Observer<number>) => {
      observer.next(1);
      setTimeout(() => {
        observer.next(2);
        observer.complete();
      }, 2000);
    });
  }

  ngOnInit() {
    this.subscription = this.myObservable$.subscribe(data =>
      console.log("data", data)
    );

    this.operatorOf();
    this.operatorMap();
    this.operatorFilter();
    this.operatorCatchError();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public operatorOf() {
    of(10, 20, 30).subscribe(
      value => console.log("value:", value),
      err => console.log("error:", err)
    );
  }

  public operatorMap() {
    of(10, 20, 30)
      .pipe(map(x => x * 2))
      .subscribe(value => console.log("value x 2", value));
  }

  public operatorFilter() {
    of(1, 2, 10, 20, 3, 30)
      .pipe(filter(x => x > 9))
      .subscribe(value => console.log("value größer 9", value));
  }

  public operatorCatchError() {
    of(
      "Heute",
      "schon",
      "was",
      "cooles",
      "mit",
      "JavaScript",
      "error",
      "gemacht",
      "?"
    )
      .pipe(
        map(value => {
          if (value === "error") {
            throw "ERROR!";
          }
          return value;
        }),
        catchError(err => {
          throw 'Details: ' + err;
        }),
      )
      .subscribe(
        x => console.log(x),
        err => console.log(err)
      );
  }
}
