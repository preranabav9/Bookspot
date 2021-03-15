import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  api: string = "http://localhost:8080/bookSpotAPI/";
  constructor(private httpClient: HttpClient) { }
  addReview(review: any) {
    return this.httpClient.post(this.api + "addReview", review);
  }
  getReviewsByBookISBN(bookISBN: string) {
    return this.httpClient.get(this.api + "getReviewsByBook/"+bookISBN);
  }
}
