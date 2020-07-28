import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtdUploadPageRoutingModule } from './atd-upload-routing.module';

import { AtdUploadPage } from './atd-upload.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtdUploadPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [AtdUploadPage]
})
export class AtdUploadPageModule { }
