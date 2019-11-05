
// import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

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
    // this.plt.ready().then(() => {
    //   this.loadData(true);
    // })
  }
// hey = "leo"
//   loadData(data,refresh = false, refresher?) {  
//     data = this.hey;
//     this.apiService.allusers(this.token, data).subscribe(res => {
//       this.users = res;
//       console.log('data', this.users)
//       if (refresher) {
//         refresher.target.complete();
//       }
//     })
//   }

}
