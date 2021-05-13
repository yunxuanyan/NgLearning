import { RouterModule, Routes } from "@angular/router";

import { GrandParentComponent } from "./grand-parent/grand-parent.component";

const styleRoutes: Routes = [
  {
    path: "style",
    component: GrandParentComponent,
    data: { animation: "Style" },
  },
];

export const StyleRouting = RouterModule.forChild(styleRoutes);
