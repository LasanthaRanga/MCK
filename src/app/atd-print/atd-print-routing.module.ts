import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdPrintPage } from './atd-print.page';

const routes: Routes = [
  {
    path: '',
    component: AtdPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdPrintPageRoutingModule {}
