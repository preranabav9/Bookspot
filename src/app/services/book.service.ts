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
      if(title)
        apiRequest += "&incategory:" + category;
      else 
        apiRequest += "incategory:" + category;
    }
    if(author) {
      if(category)
        apiRequest += "&inauthor:" + author;
      else 
        apiRequest += "inauthor:" + author;
    }
    return this.httpClient.get(this.api+apiRequest);
  }
  getUserById(id: number) {
    return this.httpClient.get(this.bookspotJPAApi+"/getUser/"+id); //New Request
  }

  getBookByRecommend(){
    return this.httpClient.get(this.bookspotMongoApi+"/getallrecommend");
  }
  getBookByfavourite(userId: number){
    return this.httpClient.get(this.bookspotMongoApi+"/getFavouriteBooksByUserId/"+userId);
  }

  addRecommendation(data: any) {
    return this.httpClient.post(this.bookspotMongoApi+"/addtorecommend", data);
  }
  addToFavourites(data: any) {
    return this.httpClient.post(this.bookspotMongoApi+"/addFavouriteBook", data);
  }
  getFavouriteBookStatus(isbn: string) {
    return this.httpClient.get(this.bookspotMongoApi + "/findFavouriteBook/" + isbn + "/" +localStorage.getItem('userId'));
  }
  deleteFromFavourite(id: number) {
    return this.httpClient.delete(this.bookspotMongoApi + "/deleteFavouriteBook/" + id,{responseType: 'text'});
  }
}
