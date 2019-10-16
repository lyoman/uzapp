  import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [

    // {
    //   title: 'Home',
    //   url: '',
    //   icon: 'home'
    // },
 
    {
      title: 'About',
      url: '/aboutuz',
      icon: 'information-circle'
    },
    {
      title: 'Phone Directory',
      url: '/faculties',
      icon: 'call'
    },
    {
      title: 'Clinic',
      url: '/clinic',
      icon: 'medkit'
    },
    {
      title: 'Security',
      url: '/security',
      icon: 'construct'
    }
    ,
    {
      title: 'Feedback',
      url: '/library',
      icon: 'book'
    },
    {
      title: 'FAQs',
      url: '/faqs',
      icon: 'help'
    },
    
    {
      title: 'Share',
      url: '/faqs',
      icon: 'ios-share'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    backToWelcome(){
      this.router.navigateByUrl('login');    

  }

    logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 500);
  }
}
