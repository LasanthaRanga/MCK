import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAssessmentPage } from './find-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: FindAssessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAssessmentPageRoutingModule {}
