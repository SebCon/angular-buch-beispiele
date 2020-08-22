import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent{
  public valuePublic = 'Hallo Welt';
  public myNumber = 99;
  // private valuePrivate = 'Ich bin geheim';  --> führt bei einem Build zu einem Fehler, daher
  public valuePrivate = 'Ich bin geheim';

  public showMyText(): string {
    return 'mein Return-Wert';
  }

}
