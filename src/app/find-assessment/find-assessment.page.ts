import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-assessment',
  templateUrl: './find-assessment.page.html',
  styleUrls: ['./find-assessment.page.scss'],
})
export class FindAssessmentPage implements OnInit {

  apiurl = environment.apiUrl + 'ass/';
  constructor(private apiCall: ApicallService, private router: Router) { }
  idAssess;
  hasAssessData = false;
  isLoading = false;
  selectedAssessment = null;
  selectedBalance = null;
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
    this.router.navigate(['/atd-form', this.idAssess]);
  }

}
