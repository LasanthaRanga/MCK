import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdCriPageRoutingModule } from './atd-cri-routing.module';

import { AtdCriPage } from './atd-cri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdCriPageRoutingModule
  ],
  declarations: [AtdCriPage]
})
export class AtdCriPageModule {}
