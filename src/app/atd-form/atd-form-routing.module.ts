import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdFormPage } from './atd-form.page';

const routes: Routes = [
  {
    path: '',
    component: AtdFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdFormPageRoutingModule {}
