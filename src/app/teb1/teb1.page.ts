// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth/auth.service';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teb1',
  templateUrl: './teb1.page.html',
  styleUrls: ['./teb1.page.scss'],
})
export class Teb1Page implements OnInit {

  
  token: any;
  users :any;
  response: any;
  response1: any;
  status: any;

  constructor(
              public router:Router, 
              ) { 

                const token = JSON.parse(localStorage.getItem('token'));
                this.token = token;
                console.log('token again', this.token);

                // this.allusers();
   }

  ngOnInit() {
  }

  hey = "data";

  // allusers(){
  //   // data = this.hey;
  //   this.authService.allusers(this.token, this.hey).subscribe(resonse =>{ 
  //     this.users = resonse;
  //     console.log('users', this.users);
  //     localStorage.setItem('user', JSON.stringify(this.users[0]));
  //     console.log('me', this.users[0]);
  //     this.response = this.users[0]['username']
  //     this.status = this.users[0]['is_staff']

  //     this.response1 = this.users[0]['is_staff']
  //     localStorage.setItem('status', JSON.stringify(this.response1));

  //     localStorage.setItem('username', JSON.stringify(this.response));
      
    
  //   });
  // }

  phones(){
    this.router.navigateByUrl('faculties');
  }

  news(){
    this.router.navigateByUrl('newslist');
  }

  ambulance(){
    this.router.navigateByUrl('clinic');
  }

  food(){
    this.router.navigateByUrl('meals');
  }

  events(){
    this.router.navigateByUrl('events');
  }

  sports(){
    this.router.navigateByUrl('sportandfacility');
  }

  finance(){
    this.router.navigateByUrl('bank');
  }

  hostels(){
    this.router.navigateByUrl('hostels');
  }
  security(){
    this.router.navigateByUrl('security');
  }

  backToWelcome(){
    this.router.navigateByUrl('login');    

}

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
}

}
