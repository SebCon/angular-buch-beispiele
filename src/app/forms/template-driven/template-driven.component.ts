import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  public name: string;
  public telefon: string;
  public boost: boolean;
  public domain: string;
}
