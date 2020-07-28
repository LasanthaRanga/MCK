import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdAllPageRoutingModule } from './atd-all-routing.module';

import { AtdAllPage } from './atd-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdAllPageRoutingModule
  ],
  declarations: [AtdAllPage]
})
export class AtdAllPageModule {}
