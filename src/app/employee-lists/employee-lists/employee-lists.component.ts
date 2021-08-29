import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-lists',
  template: ` <p>employee-lists works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeListsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('hi');
  }
}
