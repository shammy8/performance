import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <h1>Angular Performance Optimisation</h1>
      <!-- <nav><a>Employee</a></nav> -->
    </mat-toolbar>
    <mat-menu #menu="matMenu">
      <a mat-menu-item>Employee Lists</a>
      <a mat-menu-item>Other</a>
    </mat-menu>
  `,
  styles: [],
})
export class AppComponent {
  title = 'performance';
}
