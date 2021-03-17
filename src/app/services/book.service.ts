import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiKey: string = "AIzaSyDC0itpOE_dpXciDZ9-Qp_PWXQQVdcVsxQ";
  api: string = "https://www.googleapis.com/books/v1/volumes";
  bookspotJPAApi: string = "http://localhost:8080/bookSpotAPI";
  bookspotMongoApi: string = "http://localhost:8081/bookSpotAPI";

  constructor(private httpClient: HttpClient) { }
  getAllBooks() {
    return this.httpClient.get(this.api+"?q=trending&printType=books&maxResults=4&key="+this.apiKey);
  }
  getBookByCategory(category: string) {
    return this.httpClient.get(this.api+"?q=incategory:"+category+"&maxResults=4&key="+this.apiKey);
  }
  getBookByBookId(isbn: string) {
    return this.httpClient.get(this.api+"?q=isbn:"+isbn);
  }
  getBooksByFilter(category: string, author: string, title: string) {
    let apiRequest = "?q=";
    if(title) {
      apiRequest += title;
    }
    if(category) {
      apiRequest += "incategory:" + category;
    }  else {
      apiRequest += "criticism&printType=books&maxResults=4&key="+this.apiKey;
    }
    if(author) {
      apiRequest += "&inauthor:" + author;
    }
    return this.httpClient.get(this.api+apiRequest);
  }
  getUserById(id: number) {
    return this.httpClient.get(this.bookspotJPAApi+"/getUser/"+id); //New Request
  }

  getBookByRecommend(){
    return this.httpClient.get(this.bookspotMongoApi+"/getallrecommend");
  }
  getBookByfavourite(){
    return this.httpClient.get(this.bookspotMongoApi+"/getBookByfavourite()");
  }

}
