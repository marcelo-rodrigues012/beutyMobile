import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { ServicoListComponent } from './servico-list/servico-list.component';
import { ServicoDetailComponent } from './servico-detail/servico-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponentModule } from '../message/message.module';

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
    IonicModule,
    MessageComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicoModule { }
