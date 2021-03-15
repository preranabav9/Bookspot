import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAuthenicate: boolean;
  books: any;
  categoryBooks: any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.isAuthenicate = false;
    this.getBookByCategory("horror");
  }
  getBookByCategory(category: string) {
    this.bookService.getBookByCategory(category).subscribe(
      response => {
        this.categoryBooks = response['items'];
      },
      error => {
        console.log("error", error);
      }
    );
  }
  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      response => {
        this.books = response['items'];
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
