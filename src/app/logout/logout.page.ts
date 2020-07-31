import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private storage: Storage, private router: Router) {
    this.storage.remove('secret');
    this.storage.remove('user');
    this.router.navigate(['login']);
   // window.location.reload();
  }

  ngOnInit() {
  }

}
