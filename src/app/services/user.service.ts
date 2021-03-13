import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string = "http://localhost:8080/bookSpotAPI/";
  constructor(private httpClient: HttpClient) { }

  register(user: any) {
    console.log("user", user);
    return this.httpClient.post(this.api + "addUser", user);
  }
}

