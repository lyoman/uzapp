import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-drugdetail',
  templateUrl: './drugdetail.page.html',
  styleUrls: ['./drugdetail.page.scss'],
})
export class DrugdetailPage implements OnInit {

  drug: any;

  constructor(private modalController: ModalController,
              private navParams: NavParams,) { }

  ngOnInit() {
    this.drug = this.navParams.get('drug');
    console.log('drug', this.drug);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
