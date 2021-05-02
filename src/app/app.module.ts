import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyleModule } from './style/style.module';
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleModule
  ],
  imports: [BrowserModule, AppRoutingModule, StyleModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
