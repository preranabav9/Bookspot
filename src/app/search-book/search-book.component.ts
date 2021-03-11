import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  category: string;
  categoryBooks: any;
  constructor(private route: ActivatedRoute,
            private bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['category']);
        this.category = params['category'];
        this.getBooksByFilter(this.category);
      }
    );
  }
  getBooksByFilter(category: string = '', author: string = '', title: string = '') {
      this.bookService.getBooksByFilter(category, author, title).subscribe(
        response => {
          console.log("response", response);
          this.categoryBooks = response['items'];
        }, error => {
          console.log("error", error);
        }
      )
  }
}
