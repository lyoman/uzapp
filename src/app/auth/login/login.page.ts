import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData: any;
  // user: any;

  user = { id: '', username: '', password: ''};

  constructor(private  router:  Router,
              public alertController: AlertController,
              public loading: LoadingService,
              private  authService:  AuthService, 
              
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

  login1(){
    this.router.navigateByUrl('tebs');
  }

  login(){
    if(this.user.username == "" || this.user.password == ""){
      this.presentAlert1();
    }

    else{
      this.loading.presentLoading();
      this.authService.login(this.user, '').subscribe((res)=>{
        this.userData = res;
        console.log('data', this.user);
        localStorage.setItem('token', JSON.stringify(this.userData));
        console.log('token', this.userData);
        
        this.router.navigateByUrl('tebs');
      }, (err) => {
        this.loading.dismiss();
        this.alert();
    });
    }

  }

  guest(){
    this.router.navigateByUrl('guest');
  }

}
