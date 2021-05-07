import { RouterModule, Routes } from "@angular/router";
import { HostComponent } from "./host/host.component";

const directiveRoutes: Routes = [
  {
    path: "directive",
    component: HostComponent,
  },
];

export const directiveRouting = RouterModule.forChild(directiveRoutes);
