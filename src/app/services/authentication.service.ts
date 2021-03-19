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
  isUserAuthenticated(token, userId): Promise<any> {
    const header = {
      headers: new HttpHeaders().set('Authorization', `${token}`)
    };
    return this.httpClient.post(this.authURL + 'authenicate/'+userId, {token: token}).
    pipe
    (map(response => response['isAuthenticated'])).toPromise();
  }
}