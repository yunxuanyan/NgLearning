import { Component, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";
import { mergeDeepLeft } from "ramda";

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

  girla = {
    name: { firstName: "Betty", lastName: "Foster" },
    contract: {
      address: { city: "wellington", suburb: "Thorndon" },
      cellNumber: "0000000",
    },
    mail: "a",
  };
  girlb = {
    name: { firstName: "Julie" },
    contract: { address: { city: "Auckland", code: "1111" } },
    mail: "b",
    email: "julie@gmail.com",
  };
  private htmlSnippet =
    'Template <script>alert("0wned")</script> <b>Syntax</b>';
  public dangerousUrl;
  public trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit() {
    //把girlb在girla中没有的property，加入到girla中,并不进入第二层
    console.log({ ...this.girlb, ...this.girla });
    //把girlb中的值复写到girla中，相同的值会覆盖掉，会进入深层覆盖
    console.log(mergeDeepLeft(this.girlb, this.girla));
    //
    console.log(Object.assign(this.girlb, this.girla));
  }
}
