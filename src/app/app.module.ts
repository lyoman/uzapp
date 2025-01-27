import { AuthModule } from './auth/auth.module';
import { DrugdetailPageModule } from './clinic/drugdetail/drugdetail.module';
// import { DrugdetailPage } from './clinic/drugdetail/drugdetail.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LoadingService } from './services/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            IonicStorageModule.forRoot(),
            HttpClientModule,
            DrugdetailPageModule,
            AuthModule,
          ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    // DrugdetailPage,
    LoadingService,
    Geolocation, 
    CallNumber,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
