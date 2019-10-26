
// import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-teb3',
  templateUrl: './teb3.page.html',
  styleUrls: ['./teb3.page.scss'],
})
export class Teb3Page implements OnInit {

  token: any;
  users: any;

  username: any;

  constructor(
              private plt: Platform,
              private router: Router,
              ) { 

                const token = JSON.parse(localStorage.getItem('token'));
                this.token = token;
                console.log('Logged in user', this.token);


                const username = JSON.parse(localStorage.getItem('username'));
                this.username = username;
   }

   ngOnInit() {
   
  }

  catering(){
    this.router.navigateByUrl('meals');
  }

  
  clinic(){
    this.router.navigateByUrl('clinic');
  }

}
