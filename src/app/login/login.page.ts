import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  uname;
  pword;
  userUrl = environment.apiUrl + 'user/';
  constructor(private apiCall: ApicallService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.uname + " -- " + this.pword);
    this.apiCall.call(this.userUrl + 'login', { uname: this.uname, pword: this.pword }, data => {
      console.log(data);
    });
  }

  getAll() {
    console.log(this.uname + " -- " + this.pword);
    this.apiCall.call(this.userUrl + 'getAll', { uname: this.uname, pword: this.pword }, data => {
      console.log(data);
    });
  }


}
