import { RouterModule, Routes } from "@angular/router";

import { AnimationComponent } from "./animation/animation.component";

const animationRoutes: Routes = [
  {
    path: "animation",
    component: AnimationComponent,
    data: { animation: "Animation" }, //Should added if need animation
  },
];

export const animationRouting = RouterModule.forChild(animationRoutes);
