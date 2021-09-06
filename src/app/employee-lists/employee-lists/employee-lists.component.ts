import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employee-lists',
  styleUrls: ['./employee-lists.component.css'],
  template: `
    <app-employee-list
      listName="Drams"
      [employees]="dramsEmployees"
      (addEmployee)="employeeService.addDramsEmployee($event)"
    ></app-employee-list>

    <mat-divider [vertical]="true"></mat-divider>

    <app-employee-list
      listName="Trapeze"
      [employees]="trapezeEmployees"
      (addEmployee)="employeeService.addTrapezeEmployee($event)"
    ></app-employee-list>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeeListsComponent implements OnInit, OnDestroy {
  dramsEmployees: Employee[] = [];
  trapezeEmployees: Employee[] = [];

  destroy$ = new Subject<void>();

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.dramsEmployees$
      .pipe(takeUntil(this.destroy$))
      .subscribe((employees) => {
        this.dramsEmployees = employees;
      });

    this.employeeService.trapezeEmployees$
      .pipe(takeUntil(this.destroy$))
      .subscribe((employees) => {
        this.trapezeEmployees = employees;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
