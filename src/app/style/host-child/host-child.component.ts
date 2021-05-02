import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-host-child",
  templateUrl: "./host-child.component.html",
  styleUrls: ["./host-child.component.css"],
})
export class HostChildComponent implements OnInit {
  url;

  constructor() {}

  ngOnInit() {
    this.url = "/assets/image-test.png";
  }
}
