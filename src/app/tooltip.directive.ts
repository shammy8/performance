import { Directive, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') content: string | number = 'Content';

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.setupTooltip();
    });
  }

  private setupTooltip() {
    tippy(this.el.nativeElement, {
      content: this.content.toString(),
      theme: 'light',
      placement: 'left',
    });
  }
}
