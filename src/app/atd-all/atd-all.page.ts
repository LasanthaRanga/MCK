import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-atd-all',
  templateUrl: './atd-all.page.html',
  styleUrls: ['./atd-all.page.scss'],
})
export class AtdAllPage implements OnInit {

  atdurl = environment.apiUrl + 'atd/';
  atdStatus;
  atdList;
  userCat;
  user;
  status;

  constructor(private apiCall: ApicallService, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('user').then(result => {
      this.user = result;
      console.log(this.user);
      this.getStatus();
    });
  }

  getStatus() {
    this.apiCall.call(this.atdurl + 'getStatus', { status: this.atdStatus }, data => {
      this.status = data;
      console.log(this.status);
    });
  }

  getAtdList() {
    this.atdList = null;
    this.apiCall.call(this.atdurl + 'getAtdList', { status: this.atdStatus }, data => {
      this.atdList = data;
      console.log(this.atdList);
    });
  }

  loadAtdData(atd) {
    console.log(atd);
    this.router.navigate(['/atd-info', atd.idAtd]);
  }

  loadAtdDataCri(atd) {
    console.log(atd);
    this.router.navigate(['/atd-cri', atd.idAtd]);
  }

}
