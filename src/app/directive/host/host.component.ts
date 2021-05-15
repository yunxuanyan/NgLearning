import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-host",
  templateUrl: "./host.component.html",
  styleUrls: ["./host.component.css"],
})
export class HostComponent implements OnInit {
  private isRed: boolean;
  customerStyle: object;
  isItalic: boolean;
  isBold: boolean;
  condition: boolean = true;

  constructor() {}

  ngOnInit() {
    this.isRed = true;
  }

  setCustomerStyle() {
    console.log("here");
    this.customerStyle = {
      "font-style": this.isItalic ? "italic" : "normal",
      "font-weight": this.isBold ? "bold" : "normal",
    };
  }
}
