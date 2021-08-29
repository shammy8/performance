import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <mat-form-field>
      <mat-label>Name</mat-label>
      <input matInput [(ngModel)]="selectedName" />
    </mat-form-field>
    <br />
    <mat-form-field>
      <mat-label>Value</mat-label>
      <mat-select [(value)]="selectedValue">
        <mat-option *ngFor="let option of valueOptions" [value]="option">{{
          option
        }}</mat-option>
      </mat-select>
    </mat-form-field>
    <br />
    <button mat-flat-button color="primary">Add</button>
    <pre>{{ employees | json }}</pre>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeListComponent implements OnInit {
  valueOptions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  selectedValue = 15;
  selectedName = '';

  @Input() employees: Employee[] = [];
  @Output() addEmployee = new EventEmitter();
  @Output() deleteEmployee = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('hi');
  }
}
