import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService { 

  // isLoading:any;
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  // loader1(){

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Loading please wait...',
        spinner: 'crescent',
        duration: 1000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }
  // present();
  // }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
