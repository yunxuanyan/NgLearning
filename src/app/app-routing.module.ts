import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  // { path: "**", component: PageNotFoundComponent } // If put the wildcard route here, route-outlet will show this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
