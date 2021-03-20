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

  login(user:any){
    console.log("user", user);
    return this.httpClient.post(this.api + "login", user);
    
  }
  forgetpassword(email: string){
    return this.httpClient.get(this.api + "forgot-password/"+email);
  }

  resetPassword(user:any, userId: number){
    return this.httpClient.put(this.api + "updateUser/"+userId, user); 
  }
  deleteStudent(id){
    return this.httpClient.delete(this.api + "deleteUser/" + id); 
  }
}

