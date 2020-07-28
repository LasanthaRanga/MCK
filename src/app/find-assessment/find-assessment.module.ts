import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAssessmentPageRoutingModule } from './find-assessment-routing.module';

import { FindAssessmentPage } from './find-assessment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAssessmentPageRoutingModule
  ],
  declarations: [FindAssessmentPage]
})
export class FindAssessmentPageModule {}
