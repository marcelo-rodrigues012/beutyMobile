import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListComponent
  }
];

@NgModule({
  declarations: [UsuarioListComponent, UsuarioDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [UsuarioListComponent, UsuarioDetailComponent]
})
export class UsuarioModule { }
