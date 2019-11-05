// import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  token: any;
  users :any;
  response: any;
  response1: any;

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
  //     this.response1 = this.users[0]['is_staff']
  //     localStorage.setItem('status', JSON.stringify(this.response1));

  //     localStorage.setItem('username', JSON.stringify(this.response));
      
    
  //   });
  // }


  news(){
    this.router.navigateByUrl('newslist');
  }

  ambulance(){
    this.router.navigateByUrl('ambulance');
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
  
  library(){
    this.router.navigateByUrl('library');
  }

  laptops(){
    this.router.navigateByUrl('laptops');
  }


  backToWelcome(){
    this.router.navigateByUrl('login');    

}

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
}


}
