import { OfflineManagerService } from './offline-manager.service';
import { NetworkService, ConnectionStatus } from './network.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import * as jwt_decode from 'jwt-decode';


const API_STORAGE_KEY = 'specialkey';
// const API_URL = 'http://127.0.0.1:8000/api';
const API_URL = 'http://uzbuddie.pythonanywhere.com/api';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  constructor(private storage: Storage, 
              private http: HttpClient, 
              private networkService: NetworkService, 
              private offlineManager: OfflineManagerService,) { }

  id: any;
  user_id: any


    // Save result of API requests
    private setLocalData(key, data) {
      this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    }
  
    // Get cached API result
    private getLocalData(key) {
      console.log('return local data!');
      return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }


  allusers(token, data): Observable<any> {

    console.log(jwt_decode(token['token'])['user_id'])
    this.id = jwt_decode(token['token'])['user_id']
    this.user_id = jwt_decode(token['token'])['user_id']
    console.log('user_id', this.user_id);
    localStorage.setItem('user_id', JSON.stringify(this.user_id));

    localStorage.setItem('user', JSON.stringify(this.user_id));

    let url = `${API_URL}/users/users/?id=` + this.user_id;

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      // return from(this.offlineManager.storeRequest(url, 'GET', data));
      return from(this.getLocalData('usersData'+ this.user_id));
    } else {
      return this.http.get(url, data).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('usersData'+ this.user_id, res);
          console.log(res);
          console.log('offline data', this.getLocalData('usersData'+ this.user_id));
          // throw new Error(err);
          // catchError(err => {
          //   this.offlineManager.storeRequest(url, 'GET', data);
          //   throw new Error(err);
          // })
        })
      );
    }
  }
}
