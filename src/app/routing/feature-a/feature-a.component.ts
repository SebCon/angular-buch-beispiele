import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css']
})
export class FeatureAComponent {

  constructor(private readonly location: Location) {}

  public goBack() {
    this.location.back();
  }
}
