import { Component } from '@angular/core';

interface DataContainer {
  x: string;
  y: {
    id: string
  }
}

@Component({
  selector: 'app-safe-elvis-operator',
  templateUrl: './safe-elvis-operator.component.html',
  styleUrls: ['./safe-elvis-operator.component.css']
})
export class SafeElvisOperatorComponent {
  public data: DataContainer | undefined;

  public setData(): void {
    if (this.data) {
      this.data = undefined;
    } else {
      this.data = {
        x: '#Jetzt bin ich da#',
        y: {
          id: 'id123'
        }
      };
    }
  }

}
