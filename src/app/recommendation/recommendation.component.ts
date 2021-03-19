import { coerceArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  books: any;
  recommendedBooks: any[];
  countArray: any[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBookByRecommend();
  }
  getBookByRecommend(){
    this.bookService.getBookByRecommend().subscribe(
      response => {
        console.log("response", response);
        this.books = response;
        this.recommendedBooks = Array.from(new Set(this.books.map(item => item.isbn)))
          .map(isbn => {
            let currentBook =  this.books.find(book => book.isbn === isbn);
            return {
              authorName: currentBook.authorName,
              bookDesc: currentBook.bookDesc,
              bookImg: currentBook.bookImg,
              bookName: currentBook.bookName,
              id: currentBook.id,
              isbn: isbn,
              userid: currentBook.userid,
              username: currentBook.username,
            }
          });
          console.log("recommended", this.recommendedBooks);
      }, error => {
        console.log("error", error);
      }
    )
  }
  getCount(isbn) {
    let count = this.books.reduce(function(n, book) {
    return n + (book.isbn == isbn);
    }, 0);
    return count;
  }
}
