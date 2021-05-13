import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl("Nancy");
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {
    this.name.setValue("Lisa");
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
