import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { IonicToastService } from '../services/ionic-toast.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-atd-info',
  templateUrl: './atd-info.page.html',
  styleUrls: ['./atd-info.page.scss'],
})
export class AtdInfoPage implements OnInit {
  atdurl = environment.apiUrl + 'atd/';
  atdUploadurl = environment.apiUrl + 'atdUpload/';
  assurl = environment.apiUrl + 'ass/';
  atdid;
  atd;
  assessment;
  newCustomers;
  isLoading = false;
  user;
  year; month; date;
  full;
  arly;
  assDes;


  wardList;
  streetList;
  selectedWard;
  selectedStreet;
  assno;

  assessmentArray;
  assessmentAdded = [];

  uploadedList = [];
  imageArray = [];
  sides = [];
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
    private apiCall: ApicallService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,
    private dataService: DataService,
    private tost: IonicToastService,
    private stor: Storage,
  ) { }

  ngOnInit() {
    this.atdid = this.aRoute.snapshot.paramMap.get('atdid');
    this.loadAtd();
    this.loadNewCustomers();
    this.loadWardCombo();
    this.getUploadList();
    this.getSide();
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

  loadWardCombo() {
    this.apiCall.call(this.assurl + 'getWardList', {}, data => {
      console.log(data);
      this.wardList = data;
    });
  }

  loadStreetCombo() {
    this.apiCall.call(this.assurl + 'getStreetList', { id: this.selectedWard.idWard }, data => {
      console.log(data);
      this.streetList = data;
    });
  }

  searchAssessment() {
    const obj = {
      ward: this.selectedWard.idWard,
      street: this.selectedStreet.idStreet,
      assno: this.assno
    };
    this.apiCall.call(this.assurl + 'searchAssessment', obj, data => {
      console.log(data);
      this.assessmentArray = data;
    });
  }

  addAssessment(ass) {
    this.assessmentAdded.push(ass);
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

  getSide() {
    this.apiCall.call(this.atdurl + 'getSide', { atdid: this.atdid }, data => {
      this.sides = data;
    });
  }

  clickOnimage(image) {
    console.log(image);
    this.dataService.setData('image', image);
    this.router.navigate(['/imageview', image]);
  }

  saveRiData() {
    if (this.assessmentAdded.length > 1) {
      if (this.assDes) {
        if (this.full) {
          if (this.arly) {
            if (this.year && this.year > 2019 && this.year < 2100) {
              if (this.month && this.month > 0 && this.month <= 12) {
                if (this.date && this.date > 0 && this.date <= 31) {
                  const day = this.year + '-' + this.month + '-' + this.date;
                  const obj = {
                    full: this.full,
                    arly: this.arly,
                    date: day,
                    uid: this.user.uid,
                    atdid: this.atdid,
                    des: this.assDes,
                    assess: this.assessmentAdded
                  };
                  this.apiCall.call(this.atdurl + 'saveRiData', obj, data => {
                    console.log(data);
                    if (data.ok === 'ok') {
                      this.tost.showToast('Successfully', 'Saved Data', 'success');
                    } else {
                      this.tost.showToast('Sumthing Wrong', '', 'danger');
                    }
                  });
                } else {
                  this.tost.showToast('Date', 'Not Valid', 'danger');
                }
              } else {
                this.tost.showToast('Date', 'Not Valid', 'danger');
              }
            } else {
              this.tost.showToast('Date', 'Not Valid', 'danger');
            }
          } else {
            this.tost.showToast('Select Value', 'requested early', 'danger');
          }
        } else {
          this.tost.showToast('Select Value', 'Full Or Half', 'danger');
        }
      } else {
        this.tost.showToast('Assessment Description', 'Fill Data', 'danger');
      }
    } else {
      this.tost.showToast('Add Assessment', 'nearest assessment', 'danger');
    }


  }
}

