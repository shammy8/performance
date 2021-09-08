import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employee-lists',
  styleUrls: ['./all-employee-lists.component.css'],
  template: `
    <app-employee-list
      listName="Drams"
      [employees]="dramsEmployees$ | async"
      (addEmployee)="employeeService.addDramsEmployee($event)"
    ></app-employee-list>

    <mat-divider [vertical]="true"></mat-divider>

    <app-employee-list
      listName="Trapeze"
      [employees]="trapezeEmployees$ | async"
      (addEmployee)="employeeService.addTrapezeEmployee($event)"
    ></app-employee-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllEmployeeListsComponent {
  dramsEmployees$: Observable<Employee[]> =
    this.employeeService.dramsEmployees$;

  trapezeEmployees$: Observable<Employee[]> =
    this.employeeService.trapezeEmployees$;

  constructor(public employeeService: EmployeeService) {}
}
