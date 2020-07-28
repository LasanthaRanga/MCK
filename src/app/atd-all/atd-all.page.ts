import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-atd-all',
  templateUrl: './atd-all.page.html',
  styleUrls: ['./atd-all.page.scss'],
})
export class AtdAllPage implements OnInit {
  atdurl = environment.apiUrl + 'atd/';
  atdStatus = 1;
  atdList;
  constructor(private apiCall: ApicallService, private router: Router) { }

  ngOnInit() {
    this.getAtdList();
  }

  getAtdList() {
    this.apiCall.call(this.atdurl + 'getAtdList', { status: this.atdStatus }, data => {
      this.atdList = data;
      console.log(this.atdList);
    });
  }

  loadAtdData(atd) {
    console.log(atd);
    this.router.navigate(['/atd-info', atd.idAtd]);
  }

}
