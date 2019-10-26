import { Component, OnInit } from '@angular/core';
import { NagivateDataService } from './../../services/nagivate-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  order: any;

  constructor(private navigateData: NagivateDataService,) { }

  ngOnInit() {
    this.order = this.navigateData.getParamData();
    console.log('order', this.order);
  }

}
