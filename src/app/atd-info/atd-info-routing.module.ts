import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdInfoPage } from './atd-info.page';

const routes: Routes = [
  {
    path: '',
    component: AtdInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdInfoPageRoutingModule {}
