import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';


export function jwtOptionsFacgtory(storage) {
  return {
    tokenGetter: () => {
      const to = storage.get('secret');
      console.log(to);
      return storage.get('secret');
    },
    whitelistedDomains: ['localhost:3000']
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFacgtory,
        deps: [Storage]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen, NgxImageCompressService,
    DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
