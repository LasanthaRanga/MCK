import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdFormTwoPageRoutingModule } from './atd-form-two-routing.module';

import { AtdFormTwoPage } from './atd-form-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdFormTwoPageRoutingModule
  ],
  declarations: [AtdFormTwoPage]
})
export class AtdFormTwoPageModule {}
