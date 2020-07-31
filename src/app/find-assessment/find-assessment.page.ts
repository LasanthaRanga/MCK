import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-find-assessment',
  templateUrl: './find-assessment.page.html',
  styleUrls: ['./find-assessment.page.scss'],
})
export class FindAssessmentPage implements OnInit {

  apiurl = environment.apiUrl + 'ass/';
  atdurl = environment.apiUrl + 'atd/';
  constructor(private apiCall: ApicallService, private router: Router, private stor: Storage) { }
  idAssess;
  hasAssessData = false;
  isLoading = false;
  selectedAssessment = null;
  selectedBalance = null;

  assSelectedListToATD = [];


  ngOnInit() {
  }

  findAssessment() {
    this.isLoading = true;
    this.apiCall.call(this.apiurl + 'getDetails', { id: this.idAssess }, data => {
      // this.hasAssessData = true;
      this.selectedAssessment = data[0];
      console.log(this.selectedAssessment);
      // this.isLoading = false;
      this.getArrears();
    });
  }

  getArrears() {
    this.apiCall.call(this.apiurl + 'getArrears', { id: this.idAssess, year: 2020 }, data => {
      this.selectedBalance = data;
      this.hasAssessData = true;
      console.log(data);
      this.isLoading = false;
    });
  }

  goToAtd() {
    this.assSelectedListToATD.push(this.selectedAssessment);
    // this.router.navigate(['/atd-form', this.idAssess]);
    console.log(this.assSelectedListToATD);
  }

  startAtdApplications() {
    this.apiCall.call(this.atdurl + 'startAtdMain', { array: this.assSelectedListToATD }, data => {
      console.log(data);
      this.stor.set('atdmain', data.idatdmain).then(result => {
        console.log(result);
        this.router.navigate(['/atd-form', data.idatdmain]);
      });
    });


  }

}
