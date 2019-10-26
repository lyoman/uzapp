import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { OfflineManagerService } from './offline-manager.service';
import { NetworkService, ConnectionStatus } from './network.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';

import * as jwt_decode from 'jwt-decode';


const API_STORAGE_KEY = 'specialkey';
// const API_URL = 'http://127.0.0.1:8000/api';
const API_URL = 'http://uzbuddie.pythonanywhere.com/api';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private storage: Storage, 
              private http: HttpClient, 
              private networkService: NetworkService, 
              private offlineManager: OfflineManagerService,) { }


                // Save result of API requests
  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  // Get cached API result
  private getLocalData(key) {
    console.log('return local data!');
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }


  getOrders(id, data): Observable<any> {
    let url = `${API_URL}/foodordering/` + id;

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      return from(this.getLocalData('foodor'+id));
    } else {
      return this.http.get(url, data).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('foodor'+id, res);
          console.log(res);
          console.log('offline data', this.getLocalData('foodor'+id));

        })
      );
    }
  }


  getMeals(forceRefresh: boolean = false): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData('meals'));
  
    } else {
     

      return this.http.get(`${API_URL}/restaurants/meals`).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('meals', res);
          console.log(res);
          console.log('offline data', this.getLocalData('meals'));
        })
      )
    }
  }


  getOneMeal(id, data): Observable<any> {
    // id = id - 1;
    let url = `${API_URL}/restaurants/meals/?id=` + id;

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      // return from(this.offlineManager.storeRequest(url, 'GET', data));
      return from(this.getLocalData('meals'+id));
    } else {
      return this.http.get(url, data).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('meals'+id, res);
          console.log(res);
          console.log('offline data', this.getLocalData('meals'+id));
          // throw new Error(err);
          // catchError(err => {
          //   this.offlineManager.storeRequest(url, 'GET', data);
          //   throw new Error(err);
          // })
        })
      );
    }
  }

  getRestaurants(forceRefresh: boolean = false): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData('restaurants'));
  
    } else {
      // let page = Math.floor(Math.random() * Math.floor(6));

      return this.http.get(`${API_URL}/restaurants/`).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('restaurants', res);
          console.log(res);
          console.log('offline data', this.getLocalData('restaurants'));
        })
      )
    }
  }


  getRestaurantMeals(forceRefresh: boolean = false, id): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData('Rmeals'+id));
  
    } else {
      // let page = Math.floor(Math.random() * Math.floor(6));

      return this.http.get(`${API_URL}/restaurants/meals/?restaurant_id=` + id).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('Rmeals'+id, res);
          console.log(res);
          console.log('offline data', this.getLocalData('Rmeals'+id));
        })
      )
    }
  }
            
}
