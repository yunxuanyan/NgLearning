import { ExtraRouterOutletComponent } from "./extra-router-outlet/extra-router-outlet.component";
import { RouteChildComponent } from "./route-child/route-child.component";
import { RouteParamsComponent } from "./route-params/route-params.component";
import { RouterModule } from "@angular/router";

const routeRoutes = [
  {
    path: "routes",
    component: RouteParamsComponent,
    data: { animation: "Routes" },
    children: [
      {
        path: "child",
        component: RouteChildComponent,
        // children: [{ path: "grand-child", component: RouteChildComponent }],
      },
      {
        path: "child/:relationship",
        component: RouteChildComponent,
      },
      {
        path: "",
        component: ExtraRouterOutletComponent,
        outlet: "extraOutlet",
      },
    ],
  },
];

export const routeRouting = RouterModule.forChild(routeRoutes);
