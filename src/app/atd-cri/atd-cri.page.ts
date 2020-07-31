import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';
import { StorService } from '../services/stor.service';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-atd-cri',
  templateUrl: './atd-cri.page.html',
  styleUrls: ['./atd-cri.page.scss'],
})
export class AtdCriPage implements OnInit {
  atdurl = environment.apiUrl + 'atd/';
  atdUploadurl = environment.apiUrl + 'atdUpload/';
  assurl = environment.apiUrl + 'ass/';
  atdid;
  atd;
  assessment;
  newCustomers;
  uploadedList = [];
  imageArray = [];
  sides = [];
  isLoading = false;
  niarest = [];
  comm;
  user;
  approval = [];


  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 1.5,
    autoplay: true,
    speed: 1000,
    // zoom: {
    //   toggle: true,
    //   maxRatio: 5
    // }
  };


  constructor(
    private aRoute: ActivatedRoute,
    private dataService: DataService,
    private http: HttpClient,
    private apiCall: ApicallService,
    private tost: IonicToastService,
    private storService: StorService,
    private stor: Storage,
    private datePicker: DatePicker,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.atdid = this.aRoute.snapshot.paramMap.get('atdid');
    this.loadAtd();
    this.loadNewCustomers();
    this.getUploadList();
    this.getSide();
    this.getNiarest();
    this.getApproval();
    this.stor.get('user').then(result => {
      this.user = result;
      console.log(this.user);

    });

  }

  loadAtd() {
    this.apiCall.call(this.atdurl + 'getAtd', { atdid: this.atdid }, data => {
      this.atd = data[0];
      console.log(this.atd);
      this.loadAssessmentData();
    });
  }

  loadAssessmentData() {
    this.apiCall.call(this.assurl + 'getDetails', { id: this.atd.idAssessment }, data => {
      console.log(data);
      this.assessment = data[0];
    });
  }

  loadNewCustomers() {
    this.apiCall.call(this.atdurl + 'getAtdCustomer', { atdid: this.atdid }, data => {
      console.log(data);
      this.newCustomers = data;
    });
  }

  getUploadList() {
    this.imageArray = [];
    this.apiCall.call(this.atdUploadurl + 'getUploadList', { atdid: this.atdid }, data => {
      console.log(data);
      data.forEach(e => {
        this.http.get(this.atdUploadurl + e.realpath, { responseType: 'blob' }).subscribe(b => {
          const imgg = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(b));
          this.imageArray.push({ img: imgg });
        });
      });
      this.isLoading = false;
    });
  }

  clickOnimage(image) {
    console.log(image);
    this.dataService.setData('image', image);
    this.router.navigate(['/imageview', image]);
  }

  approve(int) {

    let ss = '';
    let status = 0;
    let st = '';

    if (int === 1) {
      ss = 'Approved';
      if (this.user.appCatName === 'CRI') {
        status = 3; // CRI approved
        st = ' CRI Approved';
      }

      if (this.user.appCatName === 'CC') {
        status = 5; // CC approved
        st = 'CC Approved';
      }

      if (this.user.appCatName === 'AO') {
        status = 7; // CC approved
        st = 'AO Approved';
      }

    } else {
      ss = 'Rejected';
      if (this.user.appCatName === 'CRI') {
        status = 4; // CRI REJECT
        st = 'CRI REJECT';
      }
      if (this.user.appCatName === 'CC') {
        status = 6; // CC approved
        st = 'CC  REJECT';
      }
      if (this.user.appCatName === 'AO') {
        status = 8; // CC approved
        st = 'AO REJECT';
      }
    }





    let obj = {
      statusInt: int,
      statusString: ss,
      status: st,
      comment: this.comm,
      atdid: this.atdid,
      st: status,
      uid: this.user.uid
    };

    this.apiCall.call(this.atdurl + 'setApprove', obj, data => {
      console.log(data);
      this.getApproval();
    });

  }

  getSide() {
    this.apiCall.call(this.atdurl + 'getSide', { atdid: this.atdid }, data => {
      this.sides = data;
    });
  }

  getNiarest() {
    this.apiCall.call(this.atdurl + 'getNearestAss', { atdid: this.atdid }, data => {
      this.niarest = data;
    });
  }

  getApproval() {
    this.apiCall.call(this.atdurl + 'getApproval', { atdid: this.atdid }, data => {
      this.approval = data;
      console.log("Approval ============ ");
      console.log(this.approval);
    });
  }


}
