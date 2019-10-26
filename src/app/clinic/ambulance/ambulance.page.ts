import { NagivateDataService } from './../../services/nagivate-data.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.page.html',
  styleUrls: ['./ambulance.page.scss'],
})
export class AmbulancePage implements OnInit {

  user :any; 
  userData: any;
  token: any;
  location = "";
  problem = "";
  lng:any;
  lat:any;

  constructor(public alertController: AlertController,
              private router: Router,
              private navigateData: NagivateDataService,
              private geolocation: Geolocation,
              public loading: LoadingService,) { }

  ngOnInit() {
  }


  presentAlert1() {
    const alert = this.alertController.create({
    message: 'Fill in All details',
    subHeader: 'All fields are required !!!',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert2() {
    const alert = this.alertController.create({
    header: 'Error',
    message: 'Please try again later',
    subHeader: 'Something went wrong!!!!',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert3() {
    const alert = this.alertController.create({
    header: "Success !!!!",
    subHeader: 'Your Ambulance request was sucessfully sent',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  requestAmbulance(){

  }
  
  // requestAmbulance1(){
  
  //     if(this.location == "" || this.problem == ""){
  //       this.presentAlert1();
  //     }

  //     else{
  //       this.geolocation.getCurrentPosition().then((resp) => {
  //         console.log('latitude', resp.coords.latitude);
  //         console.log('longitude', resp.coords.longitude);

  //       this.user = {
  //                   "id":"",
  //                   "user": this.token,
  //                   "location": this.location,
  //                   "status": "pending",
  //                   "lng": resp.coords.longitude,
  //                   "lat": resp.coords.latitude, 
  //                   "problem": this.problem,
  //               };
                
  //         this.authService.ambulance(this.user, '').subscribe((res)=>{
  //           this.loading.presentLoading();
  //           this.userData = res;
  //           console.log('data', this.user);
  //           localStorage.setItem('amb_request', JSON.stringify(this.userData));
  //           console.log('ambulance request', this.userData);
        
  //           this.presentAlert3();
  //           this.navigateData.setParamData(this.userData);
  //           this.router.navigateByUrl('ambdetail');  
  //           this.loading.dismiss();
      
  //         }, (err) => {
  //           // this.alert();
  //           console.log('error racho', err);
  //           this.loading.dismiss();
  //           this.presentAlert2();
  //       });


  //     }).catch((error) => {
  //       console.log('Error getting location', error);
  //       this.loading.dismiss();
  //       this.presentAlert2();
  //     });


  //   }

  // }

}
