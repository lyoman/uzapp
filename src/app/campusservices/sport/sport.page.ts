import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }


  moveTabs() {
    this.router.navigateByUrl('tabs');
  }

}
