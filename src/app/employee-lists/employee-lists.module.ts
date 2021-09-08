import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeeListsComponent } from './all-employee-lists/all-employee-lists.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { HoverPreloadModule } from 'ngx-hover-preload';
import { TooltipDirective } from '../tooltip.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CalculatePipe } from '../calculate.pipe';

const routes: Routes = [{ path: '', component: AllEmployeeListsComponent }];

@NgModule({
  declarations: [
    AllEmployeeListsComponent,
    EmployeeListComponent,
    TooltipDirective,
    CalculatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    HoverPreloadModule,
    ScrollingModule,
  ],
})
export class EmployeeListsModule {}
