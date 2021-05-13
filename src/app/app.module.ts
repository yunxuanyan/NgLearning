import { AnimationsModule } from "./animation/animation.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { DirectiveModule } from "./directive/directive.module";
import { FormModule } from "./form/form.module";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PipesModule } from "./pipes/pipes.module";
import { RouteModule } from "./route/route.module";
import { StyleModule } from "./style/style.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleModule,
    PipesModule,
    RouteModule,
    DirectiveModule,
    FormModule,
    AnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
