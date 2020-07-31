import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdCriPage } from './atd-cri.page';

const routes: Routes = [
  {
    path: '',
    component: AtdCriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdCriPageRoutingModule {}
