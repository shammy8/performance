import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-lists',
  template: `
    <pre>{{ dramsEmployees | json }}</pre>
    <pre>{{ trapezeEmployees | json }}</pre>
  `,
  styles: [
    `
      :host {
        display: block;
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
