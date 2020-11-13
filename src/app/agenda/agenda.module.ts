import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgendaListComponent } from './agenda-list/agenda-list.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaListComponent
  }
];

@NgModule({
  declarations: [AgendaListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class AgendaModule { }
