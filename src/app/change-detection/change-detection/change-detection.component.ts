import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  template: `
    <app-parent></app-parent>
    <app-logging></app-logging>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ChangeDetectionComponent {
  constructor() {}
}
