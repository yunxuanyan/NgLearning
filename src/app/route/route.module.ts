import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouteParamsComponent } from "./route-params/route-params.component";
import { routeRouting } from "./route.routing";
import { ExtraRouterOutletComponent } from './extra-router-outlet/extra-router-outlet.component';
import { RouteChildComponent } from './route-child/route-child.component';

@NgModule({
  declarations: [RouteParamsComponent, ExtraRouterOutletComponent, RouteChildComponent],
  imports: [CommonModule, routeRouting],
})
export class RouteModule {}
