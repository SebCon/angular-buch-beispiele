import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  public width = 100;
  public height = 100;

  public bigger(): void {
    this.width += 20;
    this.height += 20;
  }
}
