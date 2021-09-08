import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employee-list.component.css'],
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
        selectedValue = 20
      "
    >
      Add
    </button>

    <!-- <cdk-virtual-scroll-viewport itemSize="30" style="height: 500px"> -->
    <div *ngFor="let employee of employees" class="employee-list">
      <div [appTooltip]="employee.id">{{ employee.name }}.</div>
      <div>{{ employee.value }}</div>
      <div>=></div>
      <div>
        {{ calculate(employee.value, employee.name) }}
      </div>
    </div>
    <!-- </cdk-virtual-scroll-viewport> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  valueOptions = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  selectedValue = 20;
  selectedName = '';

  @Input() listName = '';
  @Input() employees: Employee[] | null = [];
  @Output() addEmployee = new EventEmitter<Employee>();
  @Output() deleteEmployee = new EventEmitter();

  constructor() {}

  calculate(value: number, name: string) {
    console.log('Calculating:', this.listName, name, value);
    return fibonacci(value);
  }

  trackByFunction(index: number, employee: Employee) {
    return employee.id;
  }
}

function fibonacci(value: number): number {
  if (value <= 1) return 1;
  if (value === 2) return 1;
  return fibonacci(value - 1) + fibonacci(value - 2);
}
