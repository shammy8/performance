import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HoverPreloadModule, HoverPreloadStrategy } from 'ngx-hover-preload';

const routes: Routes = [
  {
    path: 'employee-lists',
    loadChildren: () =>
      import('./employee-lists/employee-lists.module').then(
        (m) => m.EmployeeListsModule
      ),
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HoverPreloadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
