import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  userData: any;
  // user: any;

  user = { id: '', username: '', phone: ''};

  constructor(private  router:  Router,
              public alertController: AlertController,
              
              ) { }

  ngOnInit() {
  }

  alert(){
    async function presentAlert() {
      const alertController = document.querySelector('ion-alert-controller');
      await alertController.componentOnReady();
    
      const alert = await alertController.create({
        header: 'Error',
        subHeader: 'Invalid Login Details',
        message: 'Check your details and try again.',
        buttons: ['OK']
      });
      return await alert.present();
    }
  
    presentAlert();
   }
  
   presentAlert1() {
    const alert = this.alertController.create({
      header: 'Fill in all Fields',
      message: 'you did not fill all the required fields',
      // subHeader: '10% of battery remaining',
      buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  login(){
    this.router.navigateByUrl('login');
  }

  guest(){
    this.router.navigateByUrl('tebs');
  }


}
