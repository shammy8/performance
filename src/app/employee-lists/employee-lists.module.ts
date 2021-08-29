import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListsComponent } from './employee-lists/employee-lists.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: EmployeeListsComponent }];

@NgModule({
  declarations: [EmployeeListsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EmployeeListsModule {}
