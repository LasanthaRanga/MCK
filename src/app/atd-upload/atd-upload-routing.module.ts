import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtdUploadPage } from './atd-upload.page';

const routes: Routes = [
  {
    path: '',
    component: AtdUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtdUploadPageRoutingModule {}
