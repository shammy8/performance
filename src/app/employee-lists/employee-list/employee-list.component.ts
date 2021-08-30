import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
    <div *ngFor="let employee of employees">
      {{ employee.name }}. {{ employee.value }} =>
      {{ calculate(employee.value, employee.name) }}
    </div>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  calculate(value: number, name: string) {
    console.log(
      this.listName,
      'calculating for',
      name,
      'with a value of',
      value
    );
    return fibonacci(value);
  }
}

function fibonacci(value: number): number {
  if (value <= 1) return 1;
  if (value === 2) return 1;
  return fibonacci(value - 1) + fibonacci(value - 2);
}
