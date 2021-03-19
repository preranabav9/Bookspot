import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAuthenicate: boolean = false;
  books: any;
  categoryBooks: any;
  constructor(private bookService: BookService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
    console.log(this.isAuthenicate);
    this.getBookByCategory("horror");
  }
  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
    });
  }
  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
    });
  }
  checkAuthentication() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) {
      this.isAuthenicate = true;
      console.log(this.isAuthenicate);
    }
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
  routeToFavourite() {
    this.router.navigate(['favourite-book']);
  }
}
