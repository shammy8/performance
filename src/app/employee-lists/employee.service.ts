import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  dramsEmployees: Employee[] = [
    { id: 0, name: 'Allan', value: 15 },
    { id: 1, name: 'William', value: 19 },
    { id: 2, name: 'Andrew', value: 17 },
    { id: 3, name: 'Douglas', value: 19 },
    { id: 4, name: 'Brendan', value: 12 },
    { id: 5, name: 'Pat', value: 15 },
    { id: 6, name: 'Niall', value: 14 },
    { id: 7, name: 'Christina', value: 10 },
    { id: 8, name: 'Jessica', value: 20 },
  ];
  dramsEmployees$ = new BehaviorSubject<any>(this.dramsEmployees);

  trapezeEmployees: Employee[] = [
    { id: 0, name: 'Kareem', value: 19 },
    { id: 1, name: 'Neil', value: 12 },
    { id: 2, name: 'Chris', value: 20 },
    { id: 3, name: 'James', value: 17 },
    { id: 4, name: 'Paul', value: 17 },
    { id: 5, name: 'Peter', value: 12 },
    { id: 6, name: 'Tim', value: 13 },
    { id: 7, name: 'Mark', value: 18 },
    { id: 8, name: 'John', value: 15 },
  ];
  trapezeEmployees$ = new BehaviorSubject<any>(this.trapezeEmployees);

  constructor() {}

  addDramsEmployee(employee: Employee) {
    employee.id = this.dramsEmployees.length;
    this.dramsEmployees = [employee, ...this.dramsEmployees];
    this.dramsEmployees$.next(this.dramsEmployees);
  }

  addTrapezeEmployee(employee: Employee) {
    employee.id = this.trapezeEmployees.length;
    this.trapezeEmployees = [employee, ...this.trapezeEmployees];
    this.trapezeEmployees$.next(this.trapezeEmployees);
  }
}

export interface Employee {
  id: number;
  name: string;
  value: number;
}
