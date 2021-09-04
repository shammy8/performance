import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <a mat-button routerLink="/"><h1>Performance Optimisation</h1></a>
      <span style="flex:1 1 auto"></span>
      <a mat-button routerLink="/employee-lists">Employee Lists</a>
      <a mat-button routerLink="/change-detection">Change Detection</a>
      <a mat-button routerLink="/test">Test</a>
      <!-- <nav><a>Employee</a></nav> -->
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'performance';
}
