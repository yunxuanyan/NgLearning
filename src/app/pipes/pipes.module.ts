import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipesRouting } from "./pipes-routing.module";
import { PipesComponent } from "./pipes/pipes.component";

@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule, PipesRouting],
  exports: [PipesComponent],
})
export class PipesModule {}
