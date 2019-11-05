import { NagivateDataService } from './../../services/nagivate-data.service';
import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {

  searchTerm = "";
  meals = [];
  meal: any;

  constructor(private foodService: FoodService, 
              private navigateData: NagivateDataService,
              private toastController: ToastController,
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
                this.foodService.getMeals(refresh).subscribe(res => {
                  this.meals = res;
                  console.log(this.meals)
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
          
                  this.foodService.getOfflineMeals().subscribe(res => {
                
                    this.meals = res;
                    this.meal = res;
                    
                    if (refresher) {
                      refresher.target.complete();
                    }
                  });
            })
      }
            
            
              filterItems(searchTerm) {
                console.log("NAME", this.searchTerm);
                console.log("array",this.meals)
                
                return this.meals.filter(item => {
                  return item.name.toLowerCase().indexOf(searchTerm) > -1;
                });
              }
              setFilteredItems() {
                this.meal = this.filterItems(this.searchTerm);
              }

              mealDetails(meal){
                this.navigateData.setParamData(meal);
                this.router.navigateByUrl('order');  
              }

}
