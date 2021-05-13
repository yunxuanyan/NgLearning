import { RouterModule, Routes } from "@angular/router";

import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

const formRoutes: Routes = [
  {
    path: "form",
    component: ReactiveFormsComponent,
    data: { animation: "Form" },
  },
];

export const formRouting = RouterModule.forChild(formRoutes);
