import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { IonicToastService } from '../services/ionic-toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  TOKEN_KEY = 'secret';
  uname;
  pword;
  user;
  userUrl = environment.apiUrl + 'user/';
  authenticationState = new BehaviorSubject(false);

  constructor(
    private apiCall: ApicallService,
    private storage: Storage,
    private helper: JwtHelperService,
    private router: Router,
    private tost: IonicToastService,
  ) { }

  ngOnInit() {

  }

  login() {
    console.log(this.uname + " -- " + this.pword);
    this.apiCall.call(this.userUrl + 'login', { uname: this.uname, pword: this.pword }, data => {
      console.log(data);
      if (data.status === 401) {
        this.tost.showToast('Faile', 'Username Or Password Wrong', 'danger');
      } else {
        this.storage.set(this.TOKEN_KEY, data['token']);
        this.user = this.helper.decodeToken(data['token']);
        this.storage.set('user', this.user).then(result => {
          this.authenticationState.next(true);
          this.router.navigate(['/atd-all']);
        });
      }
    });

  }

  getAll() {
    console.log(this.uname + " -- " + this.pword);
    this.apiCall.call(this.userUrl + 'getAll', { uname: this.uname, pword: this.pword }, data => {
      console.log(data);
    });
  }


}
