import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { NetworkService, ConnectionStatus } from './network.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';


const API_STORAGE_KEY = 'specialkey';
// const API_URL = 'http://127.0.0.1:8000/api';
const API_URL = 'http://uzbuddie.pythonanywhere.com/api';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private storage: Storage, 
              private http: HttpClient, 
              private networkService: NetworkService,       
              ) { }

                    // Save result of API requests
  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  // Get cached API result
  private getLocalData(key) {
    console.log('return local data!');
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }


  getDrugs(forceRefresh: boolean = false): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline || !forceRefresh) {
      return from(this.getLocalData('drugs'));
  
    } else {
     

      return this.http.get(`${API_URL}/drugs`).pipe(
        map(res => res),
        tap(res => {
          console.log('returns real live API data');
          this.setLocalData('drugs', res);
          console.log(res);
          console.log('offline data', this.getLocalData('drugs'));
        })
      )
    }
  }

  getOfflineDrugs(){
    return from(this.getLocalData('drugs'));
  }
}
