import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-logging',
  styles: [
    `
      :host {
        display: block;
        margin: 10px;
        padding: 10px;
        /* border: dotted yellow 4px; */
      }
      button {
        margin: 3px;
      }
    `,
  ],
  template: `
    <button mat-raised-button color="primary" (click)="clear()">Clear</button>
    <div *ngFor="let log of loggingService.logs$ | async">
      {{ log }}
    </div>
  `,
})
export class LoggingComponent {
  constructor(public loggingService: LoggingService) {}

  clear() {
    this.loggingService.clear();
  }
}
