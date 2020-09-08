import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "red";
    // this.render2.setStyle(this.ele.nativeElement, "background-color", "red");
  }

  // @HostBinding("style.backgroundColor") bgColor: string = "aqua";

  @HostListener("mouseenter") SuKienHover() {
    // this.render2.setStyle(this.ele.nativeElement, "background-color", "yellow");
    this.ele.nativeElement.style.backgroundColor = "red";
    this.ele.nativeElement.style.fontSize = "30px";
  }
  @HostListener("mouseleave") SuKienLeave() {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "blue");
  }

}
