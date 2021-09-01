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
    { id: 18, name: 'Allan', value: 25 },
    { id: 19, name: 'William', value: 29 },
    { id: 20, name: 'Andrew', value: 27 },
    { id: 21, name: 'Douglas', value: 29 },
    { id: 22, name: 'Brendan', value: 22 },
    { id: 23, name: 'Pat', value: 25 },
    { id: 24, name: 'Niall', value: 24 },
    { id: 25, name: 'Christina', value: 20 },
    { id: 26, name: 'Jessica', value: 29 },
    { id: 27, name: 'Allan', value: 25 },
    { id: 28, name: 'William', value: 29 },
    { id: 29, name: 'Andrew', value: 27 },
    { id: 30, name: 'Douglas', value: 29 },
    { id: 31, name: 'Brendan', value: 22 },
    { id: 32, name: 'Pat', value: 25 },
    { id: 33, name: 'Niall', value: 24 },
    { id: 34, name: 'Christina', value: 20 },
    { id: 35, name: 'Jessica', value: 29 },
    { id: 36, name: 'Allan', value: 25 },
    { id: 37, name: 'William', value: 29 },
    { id: 38, name: 'Andrew', value: 27 },
    { id: 39, name: 'Douglas', value: 29 },
    { id: 40, name: 'Brendan', value: 22 },
    { id: 41, name: 'Pat', value: 25 },
    { id: 42, name: 'Niall', value: 24 },
    { id: 43, name: 'Christina', value: 20 },
    { id: 44, name: 'Jessica', value: 29 },
    // { id: 45, name: 'Allan', value: 25 },
    // { id: 46, name: 'William', value: 29 },
    // { id: 47, name: 'Andrew', value: 27 },
    // { id: 48, name: 'Douglas', value: 29 },
    // { id: 49, name: 'Brendan', value: 22 },
    // { id: 50, name: 'Pat', value: 25 },
    // { id: 51, name: 'Niall', value: 24 },
    // { id: 52, name: 'Christina', value: 20 },
    // { id: 53, name: 'Jessica', value: 29 },
  ];
  private dramsEmployeesBS$ = new BehaviorSubject<Employee[]>(
    this.dramsEmployees
  );
  dramsEmployees$ = this.dramsEmployeesBS$.asObservable().pipe(delay(500));

  trapezeEmployees: Employee[] = [
    { id: 0, name: 'Kareem', value: 29 },
    { id: 1, name: 'Neil', value: 22 },
    { id: 2, name: 'Chris', value: 20 },
    { id: 3, name: 'James', value: 27 },
    { id: 4, name: 'Tom', value: 27 },
    { id: 5, name: 'Peter', value: 22 },
    { id: 6, name: 'Tim', value: 23 },
    { id: 7, name: 'Mark', value: 28 },
    { id: 8, name: 'John', value: 25 },
    { id: 9, name: 'Kareem', value: 29 },
    { id: 10, name: 'Neil', value: 22 },
    { id: 11, name: 'Chris', value: 20 },
    { id: 12, name: 'James', value: 27 },
    { id: 13, name: 'Tom', value: 27 },
    { id: 14, name: 'Peter', value: 22 },
    { id: 15, name: 'Tim', value: 23 },
    { id: 16, name: 'Mark', value: 28 },
    { id: 17, name: 'John', value: 25 },
    { id: 18, name: 'Kareem', value: 29 },
    { id: 19, name: 'Neil', value: 22 },
    { id: 20, name: 'Chris', value: 20 },
    { id: 21, name: 'James', value: 27 },
    { id: 22, name: 'Tom', value: 27 },
    { id: 23, name: 'Peter', value: 22 },
    { id: 24, name: 'Tim', value: 23 },
    { id: 25, name: 'Mark', value: 28 },
    { id: 26, name: 'John', value: 25 },
    { id: 27, name: 'Kareem', value: 29 },
    { id: 28, name: 'Neil', value: 22 },
    { id: 29, name: 'Chris', value: 20 },
    { id: 30, name: 'James', value: 27 },
    { id: 31, name: 'Tom', value: 27 },
    { id: 32, name: 'Peter', value: 22 },
    { id: 33, name: 'Tim', value: 23 },
    { id: 34, name: 'Mark', value: 28 },
    { id: 35, name: 'John', value: 25 },
    { id: 36, name: 'Kareem', value: 29 },
    { id: 37, name: 'Neil', value: 22 },
    { id: 38, name: 'Chris', value: 20 },
    { id: 39, name: 'James', value: 27 },
    { id: 40, name: 'Tom', value: 27 },
    { id: 41, name: 'Peter', value: 22 },
    { id: 42, name: 'Tim', value: 23 },
    { id: 43, name: 'Mark', value: 28 },
    { id: 44, name: 'John', value: 25 },
    // { id: 45, name: 'Kareem', value: 29 },
    // { id: 46, name: 'Neil', value: 22 },
    // { id: 47, name: 'Chris', value: 20 },
    // { id: 48, name: 'James', value: 27 },
    // { id: 49, name: 'Tom', value: 27 },
    // { id: 50, name: 'Peter', value: 22 },
    // { id: 51, name: 'Tim', value: 23 },
    // { id: 52, name: 'Mark', value: 28 },
    // { id: 53, name: 'John', value: 25 },
  ];
  private trapezeEmployeesBS$ = new BehaviorSubject<Employee[]>(
    this.trapezeEmployees
  );
  trapezeEmployees$ = this.trapezeEmployeesBS$.asObservable().pipe(delay(1000));

  constructor() {}

  addDramsEmployee(employee: Employee) {
    employee.id = this.dramsEmployees.length;
    this.dramsEmployees = [employee, ...this.dramsEmployees];
    this.dramsEmployees = JSON.parse(JSON.stringify(this.dramsEmployees));
    this.dramsEmployeesBS$.next(this.dramsEmployees);
  }

  addTrapezeEmployee(employee: Employee) {
    employee.id = this.trapezeEmployees.length;
    this.trapezeEmployees = [employee, ...this.trapezeEmployees];
    this.trapezeEmployees = JSON.parse(JSON.stringify(this.trapezeEmployees));
    this.trapezeEmployeesBS$.next(this.trapezeEmployees);
  }
}

export interface Employee {
  id: number;
  name: string;
  value: number;
}
