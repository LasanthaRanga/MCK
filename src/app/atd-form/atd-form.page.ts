import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicToastService } from '../services/ionic-toast.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-atd-form',
  templateUrl: './atd-form.page.html',
  styleUrls: ['./atd-form.page.scss'],
})
export class AtdFormPage implements OnInit {

  atdurl = environment.apiUrl + 'atd/';

  constructor(
    private tost: IonicToastService,
    private router: Router,
    private activeR: ActivatedRoute,
    private apiCall: ApicallService,
    private dataService: DataService,
    private stor: Storage
  ) { }

  idAssessment;
  nic;
  fname;
  iname;
  adl1;
  adl2;
  adl3;
  mobile;
  tp;
  sfname;
  siname;
  applicants = [];
  selectAppId;

  inValid = false;

  ngOnInit() {
    this.idAssessment = this.activeR.snapshot.paramMap.get('id');
  }



  saveApplicant() {
    const obj = {
      nic: this.nic,
      fname: this.fname,
      iname: this.iname,
      adl1: this.adl1,
      adl2: this.adl2,
      adl3: this.adl3,
      mobile: this.mobile,
      tp: this.tp,
      sfname: this.sfname,
      siname: this.siname
    };

    if (this.selectAppId != null) {
      console.log('selected');
      if (this.selectAppId !== -1) {
        this.applicants.splice(this.selectAppId, 1);
      }
      this.tost.showToast('Successfully', 'Updated', 'success');
      this.applicants.push(obj);
      this.clearData();
    } else {
      console.log('not');
      this.tost.showToast('Successfully', 'Appliciant Added', 'success');
      this.applicants.push(obj);
      this.clearData();
      this.selectAppId = null;
    }
  }

  clearData() {
    this.nic = null;
    this.fname = null;
    this.iname = null;
    this.adl1 = null;
    this.adl2 = null;
    this.adl3 = null;
    this.mobile = null;
    this.tp = null;
    this.sfname = null;
    this.siname = null;
    this.selectAppId = null;
  }

  deleteSelected() {
    console.log(this.applicants);
    if (this.selectAppId !== -1) {
      this.applicants.splice(this.selectAppId, 1);
    }
    this.clearData();
  }

  selectByArray(id) {
    this.selectAppId = id;
    // this.clearData();
    console.log(id);
    console.log(this.applicants[id]);
    this.assignToModle(this.applicants[id]);
  }

  assignToModle(obj) {
    this.nic = obj.nic;
    this.fname = obj.fname;
    this.iname = obj.iname;
    this.adl1 = obj.adl1;
    this.adl2 = obj.adl2;
    this.adl3 = obj.adl3;
    this.mobile = obj.mobile;
    this.tp = obj.tp;
    this.sfname = obj.sfname;
    this.siname = obj.siname;
  }

  goToUpload() {
    const param = {
      idAssess: this.idAssessment,
      customer: this.applicants
    };

    this.apiCall.call(this.atdurl + 'startAtd', param, data => {
      console.log(data.atdid);
      this.stor.set('atdid', data.atdid).then(result => {
        console.log(result);
      });

      this.router.navigate(['/atd-upload']);

    });
  }
}
