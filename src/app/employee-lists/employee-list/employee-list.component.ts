import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>{{ listName }}</h3>

    <mat-form-field>
      <mat-label>Name</mat-label>
      <input matInput [(ngModel)]="selectedName" />
    </mat-form-field>
    <mat-form-field>
      <mat-label>Value</mat-label>
      <mat-select [(value)]="selectedValue">
        <mat-option *ngFor="let option of valueOptions" [value]="option">{{
          option
        }}</mat-option>
      </mat-select>
    </mat-form-field>
    <button
      mat-flat-button
      color="primary"
      (click)="
        addEmployee.emit({ id: -1, name: selectedName, value: selectedValue });
        selectedName = '';
        selectedValue = 15
      "
    >
      Add
    </button>
    <pre>{{ employees | json }}</pre>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .mat-form-field {
        margin-right: 5px;
      }
    `,
  ],
})
export class EmployeeListComponent implements OnInit {
  valueOptions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  selectedValue = 15;
  selectedName = '';

  @Input() listName = '';
  @Input() employees: Employee[] = [];
  @Output() addEmployee = new EventEmitter<Employee>();
  @Output() deleteEmployee = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('hi');
  }
}
