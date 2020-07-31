import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdPrintPageRoutingModule } from './atd-print-routing.module';

import { AtdPrintPage } from './atd-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdPrintPageRoutingModule
  ],
  declarations: [AtdPrintPage]
})
export class AtdPrintPageModule {}
