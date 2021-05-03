import { RouterModule, Routes } from "@angular/router";
import { GrandParentComponent } from "./grand-parent/grand-parent.component";

const styleRoutes: Routes = [
  {
    path: "style",
    component: GrandParentComponent,
  },
];

export const StyleRouting = RouterModule.forChild(styleRoutes);
