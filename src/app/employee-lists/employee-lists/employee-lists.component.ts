import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-lists',
  template: `
    <app-employee-list [employees]="dramsEmployees"></app-employee-list>
    <app-employee-list [employees]="trapezeEmployees"></app-employee-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-around;
      }
    `,
  ],
})
export class EmployeeListsComponent implements OnInit, OnDestroy {
  dramsEmployees: Employee[] = [];
  trapezeEmployees: Employee[] = [];

  destroy$ = new Subject<void>();

  constructor(private employeeService: EmployeeService) {}

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
