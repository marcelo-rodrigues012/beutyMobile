import { Routes, RouterModule } from '@angular/router';
import { ServicoListComponent } from './servico-list/servico-list.component';
import { ServicoDetailComponent } from './servico-detail/servico-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
{
  path: '',
  component: ServicoListComponent
}
]

@NgModule({
  declarations: [ServicoDetailComponent, ServicoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicoModule { }
