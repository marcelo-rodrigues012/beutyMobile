import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuListComponent,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
