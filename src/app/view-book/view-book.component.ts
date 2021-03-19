import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  favouriteButtonColor: string = "black";
  favouriteId: number = 0;
  favToolTip: string;
  constructor(private route: ActivatedRoute,
            private bookService: BookService,
            public dialog: MatDialog,
            private reviewService: ReviewService,
            private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['isbn']);
        this.isbn = params['isbn'];
        this.getBookById(this.isbn);
      }
    );
    this.getReviewByBook();
    this.getFavouriteBookStatus();
  }
  getFavouriteBookStatus() {
    this.bookService.getFavouriteBookStatus(this.isbn).subscribe(
      response => {
        if(response) {
          this.favouriteId = response['id'];
          this.favouriteButtonColor = "red";
          this.favToolTip = "Remove from favourite";
        }
      }
    )
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
  // getUserbyId(id:number) {
  //   this.bookService.getUserById(id).subscribe(
  //     response => {
  //       console.log(response);
  //     }
  //   )
  // }
  getReviewByBook() {
    this.reviewService.getReviewsByBookISBN(this.isbn).subscribe(
      response => {
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
        this.toastr.success("Added to Recommendation", "");
      },
      error=> {
        // this.toastr.error("Server Error", "Failed to load resources");
      }
    );
  }
  addToFavourite() {
    if(this.favouriteButtonColor === "red") {
      this.bookService.deleteFromFavourite(this.favouriteId).subscribe(
        response => {
          console.log("response", response);
          if(response === "success") {
            this.favouriteButtonColor = "black";
            this.favToolTip = "Add to Favourite";
            this.toastr.success("Removed from Favourite", "");
          } else {
            this.toastr.error("Server Error", "Failed to load resources");
          }
        }
      );
    }
    else {
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
          this.favouriteButtonColor = "red";
          this.favToolTip = "Remove from Favourite";
          this.toastr.success("Added to Favourite", "");
        },
        error=> {
          this.toastr.error("Server Error", "Failed to load resources");
        }
      );
    }
  }
}

