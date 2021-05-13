import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-animation",
  templateUrl: "./animation.component.html",
  styleUrls: ["./animation.component.css"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow",
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green",
        })
      ),
      transition("* => closed", [animate("1s")]),
      transition("* => open", [animate("0.5s")]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  constructor() {}

  isOpen: boolean = false;

  ngOnInit() {}

  trigger() {
    this.isOpen = !this.isOpen;
  }
}
