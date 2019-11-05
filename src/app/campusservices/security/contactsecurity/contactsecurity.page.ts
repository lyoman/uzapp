import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactsecurity',
  templateUrl: './contactsecurity.page.html',
  styleUrls: ['./contactsecurity.page.scss'],
})
export class ContactsecurityPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  callsecurity() {
    this.router.navigateByUrl('callsecurity');
  }

}
