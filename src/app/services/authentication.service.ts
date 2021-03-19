import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  token = localStorage.getItem('token');
  authURL = "http://localhost:8080/bookSpotAPI/";
  constructor(private httpClient : HttpClient) { }
  // authenticateUser(data) {
  //   return this.httpClient.post(, data);
  // }
  isUserAuthenticated(token, userId){
    const header = {
      headers: new HttpHeaders().set('Authorization', `${token}`)
    };
    const data = {
      "id": userId,
      "token": token
    }
    return this.httpClient.post(this.authURL + 'authenicate', data).
    pipe
    (map(response => response['isAuthenticated'])).toPromise();;
  }
}