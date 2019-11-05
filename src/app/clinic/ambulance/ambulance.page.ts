import { NagivateDataService } from './../../services/nagivate-data.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AmbulanceService } from 'src/app/auth/ambulance.service';
// import { EmailService } from '../../services/email.service';

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

  emailBody: any;

  emailDetails = {
                    to: 'leomuchenje@gmail.com', 
                    cc: 'prueleo@gmail.com', 
                    bcc: 'alexiodanje@gmail.com', 
                    subject: 'Emergency Ambulance Request', 
                    message: ''
                  }

  constructor(public alertController: AlertController,
              private router: Router,
              // private emailService: EmailService,
              private ambulanceService: AmbulanceService,
              private navigateData: NagivateDataService,
              private geolocation: Geolocation,
              public loading: LoadingService,) { 

                const token = JSON.parse(localStorage.getItem('user_id'));
                this.token = token;
                console.log('Logged in user', this.token);
               }

  ngOnInit() {
  }

  // Send Email
  // sendEmail() : void
  //  {

  //   this.emailBody = this.problem + ' ,our location is ' + this.location;
  //   console.log('problem and location', this.emailBody);

  //     let to 		: string		= this.emailDetails.to,
  //         cc 		: string		= this.emailDetails.cc,
  //         bcc 		: string		= this.emailDetails.bcc,
  //         subject 	: string		= this.emailDetails.subject,
  //         message 	: string		= this.emailBody;

   
  //        // If so call the sendEmail method of the EmailProvider service, pass in
  //        // the retrieved form data and watch the magic happen! :)
  //        this.emailService.sendEmail(to, cc, bcc, subject, message);

  //  }

  
  requestAmbulance(){
  
      if(this.location == "" || this.problem == ""){
        this.presentAlert1();
      }

      else{
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log('latitude', resp.coords.latitude);
          console.log('longitude', resp.coords.longitude);

        this.user = {
                    "id":"",
                    "user": this.token,
                    "location": this.location,
                    "status": "pending",
                    "lng": resp.coords.longitude,
                    "lat": resp.coords.latitude, 
                    "problem": this.problem,
                };
                
          this.ambulanceService.ambulance(this.user, '').subscribe((res)=>{
            this.loading.presentLoading();
            this.userData = res;
            console.log('data', this.user);
            localStorage.setItem('amb_request', JSON.stringify(this.userData));
            console.log('ambulance request', this.userData);
        
            this.presentAlert3();
            this.navigateData.setParamData(this.userData);
            this.router.navigateByUrl('clinic');  
            // this.sendEmail();//sending an email
            this.loading.dismiss();
      
          }, (err) => {
            // this.alert();
            console.log('error racho', err);
            this.loading.dismiss();
            this.presentAlert2();
        });


      }).catch((error) => {
        console.log('Error getting location', error);
        this.loading.dismiss();
        this.presentAlert2();
      });


    }

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

  requestAmbulance1(){

  }

}
