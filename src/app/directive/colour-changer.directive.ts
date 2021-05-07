import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appColourChanger]",
})
export class ColourChangerDirective {
  @Input() colour;

  @HostListener("click") onMouseClick() {
    this.el.nativeElement.style.backgroundColor = this.colour;
  }

  constructor(private el: ElementRef) {}
}
