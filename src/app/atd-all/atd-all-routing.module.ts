import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdAllPage } from './atd-all.page';

const routes: Routes = [
  {
    path: '',
    component: AtdAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdAllPageRoutingModule {}
