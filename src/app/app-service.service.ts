import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }
  signUp(user:any){
    return this.httpClient.post('https://hip-moments-wait.loca.lt/signUp', {user})
  }
}
