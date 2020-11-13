import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewMessagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [ViewMessagePage],
  exports: [RouterModule]
})
export class ViewMessagePageModule {}
