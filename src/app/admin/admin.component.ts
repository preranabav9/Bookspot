import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string
    
  ) {
  }
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
}) 


export class AdminComponent implements OnInit {
user:User[];
  modalService: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getFriends();
  }
  getFriends(){
    this.httpClient.get<any>('http://localhost:8080/bookSpotAPI/getUserDetails').subscribe(
      response => {
        console.log(response);
        this.user= response;
      }
    );
}
key:string ='id';
reverse: boolean =false;
sort(key){
  this.key = key;
  this.reverse =!this.reverse;
}



}
