import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

   // AUTH_SERVER_ADDRESS:  string  =  'http://127.0.0.1:8000/api';
   AUTH_SERVER_ADDRESS:  string  =  'http://uzbuddie.pythonanywhere.com/api';
   authSubject  =  new  BehaviorSubject(false);
 
   constructor(private  httpClient:  HttpClient, 
               private  storage:  Storage,
               ) { }
 
     foodOrder(userData, type): Observable<AuthResponse> {
       return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/foodordering/create/`+type, JSON.stringify(userData), { headers: { 'Content-Type': 'application/json' } }).pipe(
         tap(async (res: AuthResponse) => {
   
           if (res.user) {
             await this.storage.set("ACCESS_TOKEN", res.user.access_token);
             await this.storage.set("EXPIRES_IN", res.user.expires_in);
             this.authSubject.next(true);
           }
         })
       );
     }
}
