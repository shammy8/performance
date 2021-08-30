import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  dramsEmployees: Employee[] = [
    { id: 0, name: 'Allan', value: 25 },
    { id: 1, name: 'William', value: 29 },
    { id: 2, name: 'Andrew', value: 27 },
    { id: 3, name: 'Douglas', value: 29 },
    { id: 4, name: 'Brendan', value: 22 },
    { id: 5, name: 'Pat', value: 25 },
    { id: 6, name: 'Niall', value: 24 },
    { id: 7, name: 'Christina', value: 20 },
    { id: 8, name: 'Jessica', value: 29 },
    { id: 9, name: 'Allan', value: 25 },
    { id: 10, name: 'William', value: 29 },
    { id: 11, name: 'Andrew', value: 27 },
    { id: 12, name: 'Douglas', value: 29 },
    { id: 13, name: 'Brendan', value: 22 },
    { id: 14, name: 'Pat', value: 25 },
    { id: 15, name: 'Niall', value: 24 },
    { id: 16, name: 'Christina', value: 20 },
    { id: 17, name: 'Jessica', value: 29 },
  ];
  private dramsEmployeesBS$ = new BehaviorSubject<Employee[]>(
    this.dramsEmployees
  );
  dramsEmployees$ = this.dramsEmployeesBS$.asObservable().pipe(delay(1000));

  trapezeEmployees: Employee[] = [
    { id: 0, name: 'Kareem', value: 29 },
    { id: 1, name: 'Neil', value: 22 },
    { id: 2, name: 'Chris', value: 20 },
    { id: 3, name: 'James', value: 27 },
    { id: 4, name: 'Paul', value: 27 },
    { id: 5, name: 'Peter', value: 22 },
    { id: 6, name: 'Tim', value: 23 },
    { id: 7, name: 'Mark', value: 28 },
    { id: 8, name: 'John', value: 25 },
    { id: 9, name: 'Kareem', value: 29 },
    { id: 10, name: 'Neil', value: 22 },
    { id: 11, name: 'Chris', value: 20 },
    { id: 12, name: 'James', value: 27 },
    { id: 13, name: 'Paul', value: 27 },
    { id: 14, name: 'Peter', value: 22 },
    { id: 15, name: 'Tim', value: 23 },
    { id: 16, name: 'Mark', value: 28 },
    { id: 17, name: 'John', value: 25 },
  ];
  private trapezeEmployeesBS$ = new BehaviorSubject<Employee[]>(
    this.trapezeEmployees
  );
  trapezeEmployees$ = this.trapezeEmployeesBS$.asObservable().pipe(delay(2000));

  constructor() {}

  addDramsEmployee(employee: Employee) {
    employee.id = this.dramsEmployees.length;
    this.dramsEmployees = [employee, ...this.dramsEmployees];
    this.dramsEmployeesBS$.next(this.dramsEmployees);
  }

  addTrapezeEmployee(employee: Employee) {
    employee.id = this.trapezeEmployees.length;
    this.trapezeEmployees = [employee, ...this.trapezeEmployees];
    this.trapezeEmployeesBS$.next(this.trapezeEmployees);
  }
}

export interface Employee {
  id: number;
  name: string;
  value: number;
}
