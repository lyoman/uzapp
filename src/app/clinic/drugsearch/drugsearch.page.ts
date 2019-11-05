import { DrugdetailPage } from './../drugdetail/drugdetail.page';
import { DrugService } from './../../services/drug.service';
import { NagivateDataService } from './../../services/nagivate-data.service';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drugsearch',
  templateUrl: './drugsearch.page.html',
  styleUrls: ['./drugsearch.page.scss'],
})
export class DrugsearchPage implements OnInit {

  searchTerm = "";
  drugs = [];
  drug: any;

  constructor(private drugService: DrugService, 
              private toastController: ToastController,
              private navigateData: NagivateDataService,
              private modalCtrl: ModalController,
              private plt: Platform,
              private navCtrl: NavController,
              private router: Router,) { }

              ngOnInit() {
                this.plt.ready().then(() => {
                  this.loadData(true);
                })
                this.setFilteredItems();
              }
            
              loadData(refresh = false, refresher?) {
                this.drugService.getDrugs(refresh).subscribe(res => {
                  this.drugs = res;
                  console.log(this.drugs)
                  if (refresher) {
                    refresher.target.complete();
                  }
                }, (err) => {
   
                  console.log('error', err)
                  
                  let toast = this.toastController.create({
                    message: `You are now Offline`,
                    duration: 3000,
                    position: 'bottom'
                  });
                  toast.then(toast => toast.present());
          
                  this.drugService.getOfflineDrugs().subscribe(res => {
                
                    this.drugs = res;
                    this.drug = res;
                    
                    if (refresher) {
                      refresher.target.complete();
                    }
                  })
            });
            
              }
            
            
              filterItems(searchTerm) {
                console.log("NAME", this.searchTerm);
                console.log("array",this.drugs)
                
                return this.drugs.filter(item => {
                  return item.name.indexOf(searchTerm) > -1;
                  // return item.name.toLowerCase().indexOf(searchTerm) > -1;
                });
              }
              setFilteredItems() {
                this.drug = this.filterItems(this.searchTerm);
              }

     

              
  async drugDetails(drug) {
    const modal = await this.modalCtrl.create({
      component: DrugdetailPage,
      componentProps: {'drug': drug},
    });
    return await modal.present();
  }

}
