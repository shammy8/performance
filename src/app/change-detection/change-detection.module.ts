import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { MatButtonModule } from '@angular/material/button';
import { LoggingComponent } from './logging/logging.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

const routes: Routes = [{ path: '', component: ChangeDetectionComponent }];

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    LoggingComponent,
    ChangeDetectionComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],
})
export class ChangeDetectionModule {}
