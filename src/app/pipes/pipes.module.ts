import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipesComponent } from "./pipes/pipes.component";

@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule],
  exports: [PipesComponent],
})
export class PipesModule {}
