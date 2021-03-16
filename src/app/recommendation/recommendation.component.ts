import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendedBooks: any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   this.getBookByRecommend();
  }
  getBookByRecommend(){
    this.bookService.getBookByRecommend().subscribe(
      response => {
        console.log("response", response);
        this.recommendedBooks = response;
      }, error => {
        console.log("error", error);
      }
    )
  }
}
