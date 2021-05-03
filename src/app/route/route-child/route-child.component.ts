import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-route-child",
  templateUrl: "./route-child.component.html",
  styleUrls: ["./route-child.component.css"],
})
export class RouteChildComponent implements OnInit {
  public params;
  public queryParams;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log("this.route.params");
      console.log(params);
      this.params = params;
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
      console.log("this.route.queryParams");
      console.log(queryParams);
    });
    this.route.paramMap.subscribe((params) => {
      console.log("this.route.paramMap");
      console.log(params);
    });
    this.route.queryParamMap.subscribe((queryMap) => {
      console.log("this.route.queryParamMap");
      console.log(queryMap);
    });
    console.log("this.route.snapshot.paramMap.get('relationship')");
    console.log(this.route.snapshot.paramMap.get("relationship"));
  }
}
