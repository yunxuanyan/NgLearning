import { RouterModule, Routes } from "@angular/router";

import { AnimationComponent } from "./animation/animation.component";

const animationRoutes: Routes = [
  {
    path: "animation",
    component: AnimationComponent,
  },
];

export const animationRouting = RouterModule.forChild(animationRoutes);
