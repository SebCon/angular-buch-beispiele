import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-exercise',
  templateUrl: './observable-exercise.component.html',
  styleUrls: ['./observable-exercise.component.css']
})
export class ObservableExerciseComponent implements OnInit, OnDestroy {
  public data1: number[] = [];
  public sub1$: Subscription;

  public data2: number[] = [];
  public sub2$: Subscription;

  public data3: number[] = [];
  public sub3$: Subscription;

  constructor() { }

  ngOnInit() {
    this.sub1$ = this.getData$().subscribe(data => this.data1.push(data));
    this.sub2$ = this.getDataLower$(50).subscribe(data => this.data2.push(data));
    this.sub3$ = this.getDataMulti$(2).subscribe(data => this.data3.push(data));
  }

  ngOnDestroy() {
    this.sub1$.unsubscribe();
    this.sub2$.unsubscribe();
    this.sub3$.unsubscribe();
  }

  public getData$(): Observable<number> {
    return of(1, 2, 6, 10, 8, 20, 99, 9, 43, 66, 71, 18, 34);
  }

  public getDataLower$(val: number): Observable<number> {
    return this.getData$().pipe(filter(x => x < val));
  }

  public getDataMulti$(val: number): Observable<number> {
    return this.getData$().pipe(map(x => x * val));
  }

}
