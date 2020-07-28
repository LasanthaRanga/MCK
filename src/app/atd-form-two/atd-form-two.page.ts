import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';
import { StorService } from '../services/stor.service';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';


@Component({
  selector: 'app-atd-form-two',
  templateUrl: './atd-form-two.page.html',
  styleUrls: ['./atd-form-two.page.scss'],
})
export class AtdFormTwoPage implements OnInit {

  atdurl = environment.apiUrl + 'atd/';
  atdid;
  oppuNo;
  pathtiruNo;
  oppuNature;
  notharisName;
  pimburaNo;
  minindoruName;
  landAcres;
  landRudd;
  landParch;
  landLotno;
  landValue;
  year; month; date;
  handoverDate;
  landDescription;
  landDescriptionText;
  atdStatus;
  atdStatusInt;
  startDateTime;
  userId1;

  locationData = [];
  locations;
  selectedSide;
  sideData;

  landDescriptionArray = [{ id: 1, des: 'බෙදුව ඉඩමක්' }, { id: 2, des: 'සම්පූර්ණ ඉඩමක්' }, { id: 3, des: 'වෙනත් ඉඩමක්' }];

  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private apiCall: ApicallService,
    private tost: IonicToastService,
    private storService: StorService,
    private stor: Storage,
    private datePicker: DatePicker,
    private router: Router
  ) { }

  ngOnInit() {
    // this.atdid = this.dataService.getData('atdid');
    this.stor.get('atdid').then(result => { this.atdid = result; console.log(this.atdid); });
    this.getLocationArray();
  }

  getLocationArray() {
    this.apiCall.call(this.atdurl + 'getLocation', {}, data => {
      this.locations = data;
    });
  }

  setLocation() {
    const obj = {
      side: this.selectedSide,
      data: this.sideData
    };
    this.locationData.push(obj);
    console.log(this.locationData);
  }

  arangeDate() {
    this.handoverDate = this.year + '-' + this.month + '-' + this.date;
  }

  remove(d) {
    this.locationData = this.locationData.filter(obj => obj !== d);
  }

  selectDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  save() {
    if (this.atdid) {
      if (this.oppuNo) {
        if (this.oppuNature) {
          if (this.pathtiruNo) {
            if (this.notharisName) {
              if (this.pimburaNo) {
                if (this.minindoruName) {
                  if (this.landAcres) {
                    if (this.landParch) {
                      if (this.landLotno) {
                        if (this.landRudd) {
                          if (this.landValue) {
                            this.arangeDate();
                            if (this.handoverDate) {
                              if (this.landDescription) {
                                if (this.locationData.length > 0) {
                                  const obj = {
                                    atdid: this.atdid,
                                    oppuNo: this.oppuNo,
                                    pathtiruNo: this.pathtiruNo,
                                    oppuNature: this.oppuNature,
                                    notharisName: this.notharisName,
                                    pimburaNo: this.pimburaNo,
                                    minindoruName: this.minindoruName,
                                    landAcres: this.landAcres,
                                    landRudd: this.landRudd,
                                    landParch: this.landParch,
                                    landLotno: this.landLotno,
                                    landValue: this.landValue,
                                    handoverDate: this.handoverDate,
                                    landDescription: this.landDescription.id,
                                    landDescriptionText: this.landDescription.des,
                                    atdStatus: 'Application Data Complete',
                                    atdStatusInt: 1,
                                    startDateTime: '',
                                    userId1: '00',
                                    locationData: this.locationData
                                  };
                                  this.apiCall.call(this.atdurl + 'saveData', obj, data => {
                                    console.log(data);
                                    this.stor.remove('atdid').then(result => {
                                      console.log('remove ok');
                                      console.log(result);
                                      this.router.navigate(['/atd-all']);
                                    });
                                  });
                                } else {
                                  // lcation data
                                  this.tost.showToast('පිහිටීම', 'Please Check', 'danger');
                                }
                              } else {
                                // Land Description
                                this.tost.showToast('විස්තරය', 'Please Check', 'danger');
                              }
                            } else { // handover date
                              this.tost.showToast('දිනය', 'Please Check', 'danger');
                            }
                          } else {// landValue
                            this.tost.showToast('ඉඩමේ වටිනාකම', 'Please Check', 'danger');
                          }
                        } else {// LandRudd
                          this.tost.showToast('ඉඩම රුඩ්', 'Please Check', 'danger');
                        }
                      } else {// LotNo
                        this.tost.showToast('Lot No', 'Please Check', 'danger');
                      }
                    } else {// landPearch
                      this.tost.showToast('ඉඩම පර්චස්', 'Please Check', 'danger');
                    }
                  } else {// landAcress
                    this.tost.showToast('ඉඩම අක්කර', 'Please Check', 'danger');
                  }
                } else {// minindoru name
                  this.tost.showToast('මිනින්දෝරුවාගේ නම', 'Please Check', 'danger');
                }
              } else {// Pimbure Number
                this.tost.showToast('පිඹුරේ අංකය', 'Please Check', 'danger');
              }
            } else {// notharis name
              this.tost.showToast('නොතාරිස්ගේ නම', 'Please Check', 'danger');
            }
          } else {// paththiru No
            this.tost.showToast('පත්තිරු අංකය', 'Please Check', 'danger');
          }
        } else {// Oppu Natue
          this.tost.showToast('ඔප්පුවේ ස්වභාවය', 'Please Check', 'danger');
        }
      } else { // oppu no
        this.tost.showToast('ඔප්පු අංකය', 'Please Check', 'danger');
      }
    } else {
      // atdidෆෆ
      this.tost.showToast('Atd ID', 'Please Check Atd Id', 'danger');
    }
  }



}
