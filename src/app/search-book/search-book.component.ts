import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  category: string;
  title: string;
  author: string;
  categoryBooks: any;
  categoryList: string[] = ['Thriller', 'Horror'];
  isAuthenicate: boolean = false;
  constructor(private route: ActivatedRoute,
            private bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if(params) {
          this.category = params['category'];
          this.getBooksByFilter(this.category);
        } else {
          this.getBooksByFilter();
        }
      }
    );
    this.checkAuthentication();
  }
  checkAuthentication() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) {
      this.isAuthenicate = true;
      console.log(this.isAuthenicate);
    }
  }
  getBooksByFilter(category: string = '', author: string = '', title: string = '') {
      this.bookService.getBooksByFilter(category, author, title).subscribe(
        response => {
          this.categoryBooks = response['items'];
          console.log(this.categoryBooks);
        }, error => {
          console.log("error", error);
        }
      )
  }
  geFilteredBook() {
    this.getBooksByFilter(this.category, this.author, this.title);
    this.title = "";
    this.category = "";
    this.author = "";
  }
}
