import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[highlight]", //p[highlight] only works on <p [highlight]='...'>
})
export class PHighlightDirective {
  @Input() highlight: string;

  @HostListener("click") onClick() {
    this.el.nativeElement.style.backgroundColor = this.highlight;
  }

  constructor(private el: ElementRef) {}
}
