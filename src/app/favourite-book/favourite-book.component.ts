import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-favourite-book',
  templateUrl: './favourite-book.component.html',
  styleUrls: ['./favourite-book.component.css']
})
export class FavouriteBookComponent implements OnInit {
    favouriteBooks: any;
    constructor(private bookService: BookService) { }
  
    ngOnInit(): void {
      this.getBookByfavourite();
    }
    getBookByfavourite(){
      this.bookService.getBookByfavourite(parseInt(localStorage.getItem('userId'))).subscribe(
        response => {
          console.log("response", response);
          this.favouriteBooks = response;
        }, error => {
          console.log("error", error);
        }
      )
    }
  }
  