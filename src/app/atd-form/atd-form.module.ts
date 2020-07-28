import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AtdFormPageRoutingModule } from './atd-form-routing.module';
import { AtdFormPage } from './atd-form.page';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdFormPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [AtdFormPage]
})
export class AtdFormPageModule { }
