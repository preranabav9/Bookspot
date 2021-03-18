import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { BookService } from '../services/book.service';
import { ReviewService } from '../services/review-service.service';
import { ViewReviewsComponent } from '../view-reviews/view-reviews.component';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  isbn: string;
  book: any = [];
  reviews: any = [];
  constructor(private route: ActivatedRoute,
            private bookService: BookService,
            public dialog: MatDialog,
            private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['isbn']);
        this.isbn = params['isbn'];
        this.getBookById(this.isbn);
      }
    );
    this.getReviewByBook();
  }

  getBookById(bookId: string) {
    this.bookService.getBookByBookId(bookId).subscribe(
      response => {
        console.log(response);
        this.book = response['items'][0];
      },
      error => {
        console.log(error.message);
      }
    );
  }
  openDialog(): void {
    const data = {
      "userName": localStorage.getItem('userName'),
      "userId": localStorage.getItem('userId'),
      "bookName": this.book?.volumeInfo?.title,
      "bookImg" : this.book?.volumeInfo?.imageLinks?.thumbnail,
      "bookISBN" : this.isbn
    };
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
      console.log('The dialog was closed', result);
      //this.dialogValue = result.data;
    });
  }
  openViewReviewDialog(): void {
    const data = {
      "bookName": this.book?.volumeInfo?.title,
      "bookImg" : this.book?.volumeInfo?.imageLinks?.thumbnail,
      "bookISBN" : this.isbn
    };
    const dialogRef = this.dialog.open(ViewReviewsComponent, {
      data: data,
      height: '400px',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.dialogValue = result.data;
    });
  }
  getUserbyId(id:number) {
    this.bookService.getUserById(id).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  getReviewByBook() {
    this.reviewService.getReviewsByBookISBN(this.isbn).subscribe(
      response => {
        console.log("response", response);
        this.reviews = response;
      }
    )
  }
  addToRecommendation() {
    const data = {
      "bookName": this.book?.volumeInfo?.title,
      "authorName": this.book?.volumeInfo?.authors[0],
      "isbn": this.book?.volumeInfo?.industryIdentifiers[0].identifier,
      "userid": localStorage.getItem('userId'),
      "username": localStorage.getItem('userName'),
      "bookImg": this.book?.volumeInfo?.imageLinks?.thumbnail,
      "bookDesc": this.book?.volumeInfo?.description
    };
    this.bookService.addRecommendation(data).subscribe(
      response => {
        console.log("book added successfully!");
      },
      error=> {
        console.log("error");
      }
    );
  }
  addToFavourite() {
    const data = {
      "bookName": this.book?.volumeInfo?.title,
      "authorName": this.book?.volumeInfo?.authors[0],
      "isbn": this.book?.volumeInfo?.industryIdentifiers[0].identifier,
      "userid": localStorage.getItem('userId'),
      "username": localStorage.getItem('userName'),
      "bookImg": this.book?.volumeInfo?.imageLinks?.thumbnail,
      "bookDesc": this.book?.volumeInfo?.description
    };
    this.bookService.addToFavourites(data).subscribe(
      response => {
        console.log("book added successfully!");
      },
      error=> {
        console.log("error");
      }
    );
  }
}

