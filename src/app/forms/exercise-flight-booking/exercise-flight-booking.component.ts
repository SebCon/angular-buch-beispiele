import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-exercise-flight-booking",
  templateUrl: "./exercise-flight-booking.component.html",
  styleUrls: ["./exercise-flight-booking.component.css"]
})
export class ExerciseFlightBookingComponent implements OnInit {
  private readonly PRICE = 200;
  public total = this.PRICE;
  public flightBooking = this.fb.group({
    startAirport: [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z]*")
      ])
    ],
    destAirport: [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z]*")
      ])
    ],
    startDate: [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])
    ],
    endDate: [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])
    ],
    personCount: [
      1,
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ])
    ]
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.flightBooking
      .get("personCount")
      .valueChanges
      .subscribe(value => (this.total = value * this.PRICE));
  }
}
