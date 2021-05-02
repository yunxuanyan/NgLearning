import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"],
})
export class PipesComponent implements OnInit {
  today = Date.now();
  money = 100;
  aString = "Jack Sparrow";
  plainString = "this is a plain string";
  aNumber = 0.22938213343;
  obj = {
    firstName: "Jenny",
    lastName: "Yan",
    age: 100,
    phoneNumber: "1234567890",
  };
  map = new Map([
    [2, "foo"],
    [1, "bar"],
  ]);
  gender = "male";
  inviteMap = {
    male: "Invite him.",
    female: "Invite her.",
    other: "Invite them.",
  };
  messages = ["Message1", "Message2"];
  messageMapping: { [k: string]: string } = {
    "=0": "No messages.",
    "=1": "One message.",
    other: "# messages.",
  };

  collection: string[] = ["a", "b", "c", "d"];
  constructor() {}

  ngOnInit() {}
}
