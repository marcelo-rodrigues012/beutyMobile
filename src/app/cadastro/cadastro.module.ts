import { IonicModule } from '@ionic/angular';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroListService } from './cadastro-list/cadastro-list.service';
import { ReactiveFormsModule } from '@angular/forms';


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
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CadastroListService],
  exports: [CadastroListComponent]
})

export class CadastroModule { }
