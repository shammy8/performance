import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  declarations: [ParentComponent, ChildComponent, GrandchildComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
})
export class ChangeDetectionModule {}
