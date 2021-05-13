import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PipesModule } from "./pipes/pipes.module";
import { StyleModule } from "./style/style.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouteModule } from "./route/route.module";
import { DirectiveModule } from "./directive/directive.module";
import { FormModule } from "./form/form.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
