import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-favorite-book',
  templateUrl: './favorite-book.component.html',
  styleUrls: ['./favorite-book.component.css']
})
export class FavoriteBookComponent implements OnInit {
 
    favouriteBooks: any;
    constructor(private bookService: BookService) { }
  
    ngOnInit(): void {
     this.getBookByfavourite;
    }
    getBookByfavourite(){
      this.bookService.getBookByfavourite().subscribe(
        response => {
          console.log("response", response);
          this.favouriteBooks = response;
        }, error => {
          console.log("error", error);
        }
      )
    }
  }
  