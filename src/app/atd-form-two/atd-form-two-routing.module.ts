import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdFormTwoPage } from './atd-form-two.page';

const routes: Routes = [
  {
    path: '',
    component: AtdFormTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdFormTwoPageRoutingModule {}
