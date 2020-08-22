import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  public data: string[] = [
    'Sebastian',
    'Sabrina',
    'Carlotta'
  ];
  public data$ = of(this.data);
}