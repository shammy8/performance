import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListsComponent } from './employee-lists/employee-lists.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: EmployeeListsComponent }];

@NgModule({
  declarations: [EmployeeListsComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
  ],
})
export class EmployeeListsModule {}
