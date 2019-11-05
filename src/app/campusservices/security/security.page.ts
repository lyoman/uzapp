import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {


  constructor( private router:Router,) {
   }

  ngOnInit() {
  }

  contactsecurity() {
    this.router.navigateByUrl('contactsecurity');
  }
}

