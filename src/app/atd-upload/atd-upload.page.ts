import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';

// for file upload

@Component({
  selector: 'app-atd-upload',
  templateUrl: './atd-upload.page.html',
  styleUrls: ['./atd-upload.page.scss'],
})
export class AtdUploadPage implements OnInit {
  @ViewChild(ImageCropperComponent, { static: false }) angularCropper: ImageCropperComponent;
  atdurl = environment.apiUrl + 'atdUpload/';
  atdFormUrl = environment.apiUrl + 'atd/';
  imageChangedEvent: any = '';
  croppedImage = null;
  uploadBlob = null;
  isLoading = false;
  upProgrus = 0;
  atdid;

  needDock;
  dockType;
  uploadedList;
  imageArray = [];
  uploadedImage = [];

  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 1.5,
    autoplay: true,
    speed: 1000,
    // zoom: {
    //   toggle: true
    // }
  };

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private apiCall: ApicallService,
    private tost: IonicToastService,
    private stor: Storage,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit() {
    // this.atdid = this.dataService.getData('atdid');
    this.stor.get('atdid').then(result => { this.atdid = result; console.log(this.atdid); this.getUploadList(); });
    console.log(this.atdid);
    this.getNeedDock();

  }

  getNeedDock() {
    this.apiCall.call(this.atdFormUrl + 'getNeedDock', { id: 16 }, data => {
      this.needDock = data;
      console.log(this.needDock);
    });
  }

  changeDockType() {
    console.log(this.dockType);
  }

  rotateLeft() {
    this.angularCropper.rotateLeft();
  }
  rotateRight() {
    this.angularCropper.rotateRight();
  }


  flipHorizontal() {
    this.angularCropper.flipHorizontal();
  }

  flipVertical() {
    this.angularCropper.flipVertical();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    //  console.log(this.imageChangedEvent);
  }


  imageCropped(image: string) {
    this.croppedImage = image;
    //  console.log(this.croppedImage);
  }


  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  upload() {

    if (this.atdid) {
      if (this.dockType) {
        this.isLoading = true;
        const fd = new FormData();
        fd.append('atdid', this.atdid);
        fd.append('catid', this.dockType.idDoccat);
        fd.append('catName', this.dockType.Doccat_name);
        console.log(this.croppedImage);
        fetch(this.croppedImage.base64)
          .then(res => res.blob())
          .then(res => {
            //  console.log(res);
            this.uploadBlob = new File([res], '_atd.png', { type: 'image/png' });
            // console.log(this.uploadBlob);
            fd.append('attach', this.uploadBlob, this.uploadBlob.name);
            this.http.post(this.atdurl + 'upload', fd, {
              reportProgress: true,
              observe: 'events'
            }).subscribe(events => {
              if (events.type === HttpEventType.UploadProgress) {
                this.upProgrus = Math.round(events.loaded / events.total * 100);
                if (this.upProgrus === 100) {
                  this.isLoading = false;
                  this.croppedImage = null;
                  this.imageChangedEvent = null;
                  this.getUploadList();

                }
              } else if (events.type === HttpEventType.Response) {
                console.log('upload completed image path is');
                console.log(events.body);
                // this.getImage(events.body);
              }
            });
          });
      } else {
        this.tost.showToast('Document Type', 'Please Check Document Type', 'danger');
      }
    } else {
      this.tost.showToast('Atd ID', 'Please Check Atd Id', 'danger');
    }
  }

  getUploadList() {
    this.apiCall.call(this.atdurl + 'getUploadList', { atdid: this.atdid }, data => {
      console.log(data);
      this.uploadedList = data;
      this.getImages();
    });
  }

  getImages() {
    this.imageArray = [];
    this.uploadedList.forEach(e => {
      this.http.get(this.atdurl + e.realpath, { responseType: 'blob' }).subscribe(b => {
        const imgg = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(b));
        this.imageArray.push({ img: imgg });
      });
    });
    this.isLoading = false;
  }

  getImage(body) {
    console.log('image load call');
    this.http.get(this.atdurl + body.imgpath, { responseType: 'blob' }).subscribe(b => {
      console.log('blob eka awa');
      console.log(b);
      const imgg = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(b));
      this.imageArray.push({ img: imgg });
    });
  }


}
