import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  displayDiv: boolean = true;
  categoryList: string[] = ['Thriller', 'Horror'];
  isAuthenicate: boolean = false;
  constructor(private route: ActivatedRoute,
            private bookService: BookService,
            private toastr: ToastrService) { }

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
          this.displayDiv = false;
          console.log(this.categoryBooks);
        }, error => {
          this.toastr.warning("No data found", "Please enter correct details");
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
