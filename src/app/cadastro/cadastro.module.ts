import { IonicModule } from '@ionic/angular';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CadastroListComponent
  }
];
@NgModule({
  declarations: [CadastroListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [CadastroListComponent]
})

export class CadastroModule { }
