import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdInfoPageRoutingModule } from './atd-info-routing.module';

import { AtdInfoPage } from './atd-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdInfoPageRoutingModule
  ],
  declarations: [AtdInfoPage]
})
export class AtdInfoPageModule {}
