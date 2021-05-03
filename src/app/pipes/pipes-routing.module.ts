import { RouterModule, Routes } from "@angular/router";
import { PipesComponent } from "./pipes/pipes.component";

const pipesRoutes: Routes = [
  {
    path: "pipes",
    component: PipesComponent,
  },
];

export const PipesRouting = RouterModule.forChild(pipesRoutes);
