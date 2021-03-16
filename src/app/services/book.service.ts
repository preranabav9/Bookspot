import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiKey: string = "AIzaSyDC0itpOE_dpXciDZ9-Qp_PWXQQVdcVsxQ";
  api: string = "https://www.googleapis.com/books/v1/volumes";
  bookspotApi: string = "http://localhost:8080/bookSpotAPI";

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
    } else {
      apiRequest += "criticism&printType=books&maxResults=4&key="+this.apiKey;
    }
    if(category) {
      apiRequest += "incategory:" + category;
    }
    if(author) {
      apiRequest += "&inauthor:" + author;
    }
    return this.httpClient.get(this.api+apiRequest);
  }
  getUserById(id: number) {
    return this.httpClient.get(this.bookspotApi+"/getUser/"+id); //New Request
  }

  getBookByRecommend(){
    return this.httpClient.get(this.bookspotApi+"/getallrecommend");
  }


}
