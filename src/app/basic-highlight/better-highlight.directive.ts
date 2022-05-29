import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
// Renderer2 is used to manipulate only particular section of DOM but ElementRef manipulates whole application DOM to make any small changes
  constructor(private element: ElementRef, private renderor: Renderer2) {

  }
  ngOnInit() {
    this.renderor.setStyle(this.element.nativeElement, 'background', 'yellow');    
  }
}
