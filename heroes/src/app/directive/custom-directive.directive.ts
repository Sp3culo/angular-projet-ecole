import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input() appCustomDirective = "";

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appCustomDirective);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
