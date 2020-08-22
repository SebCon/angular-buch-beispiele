import { Component } from '@angular/core';
import { routes, ExtendedRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examples';
  routes: ExtendedRoutes[] = routes;
	showComponent = true;
	inputValue = '123';
}
