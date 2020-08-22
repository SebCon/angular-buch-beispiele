import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reactiv-forms",
  templateUrl: "./reactiv-forms.component.html",
  styleUrls: ["./reactiv-forms.component.css"]
})
export class ReactivFormsComponent {
  public loginForm = this.fb.group({
    name: [
      "",
      Validators.compose([Validators.required, Validators.minLength(3)])
    ],
    telefon: [
      "",
      Validators.compose([Validators.required, Validators.pattern("[0-9]*")])
    ],
    boost: ["", Validators.requiredTrue],
    domain: ["", Validators.required]
  });

  constructor(private readonly fb: FormBuilder) {
    this.loginForm
    .get("name")
    .valueChanges.subscribe(change => console.log("change", change));
  }

}
