import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HostComponent } from "./host/host.component";
import { ColourChangerDirective } from "./colour-changer.directive";
import { directiveRouting } from "./directive.routing";
import { PHighlightDirective } from "./p-highlight.directive";
import { FormsModule } from "@angular/forms";
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [HostComponent, ColourChangerDirective, PHighlightDirective, UnlessDirective],
  imports: [CommonModule, FormsModule, directiveRouting],
})
export class DirectiveModule {}
