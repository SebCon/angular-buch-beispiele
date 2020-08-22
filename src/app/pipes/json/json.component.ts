import { Component } from "@angular/core";

@Component({
  selector: "app-json",
  templateUrl: "./json.component.html",
  styleUrls: ["./json.component.css"]
})
export class JsonComponent {
  public obj = [
    {
      name: "Carlotta",
      id: 123,
      password: "1234"
    },
    {
      name: "Sabrina",
      id: 456,
      password: "4567"
    }
  ];
}
