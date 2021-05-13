import { AnimationComponent } from "./animation/animation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { animationRouting } from "./animation.routing";

@NgModule({
  declarations: [AnimationComponent],
  imports: [CommonModule, BrowserAnimationsModule, animationRouting],
})
export class AnimationsModule {}
