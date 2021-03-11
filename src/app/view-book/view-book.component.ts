import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  isbn: number;
  book: any = [];
  constructor(private route: ActivatedRoute,
            private bookService: BookService,
            public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['isbn']);
        this.isbn = params['isbn'];
        this.getBookById(this.isbn);
      }
    );
  }
  getBookById(bookId: number) {
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
      "userName": "Marco",
      "bookName": this.book?.volumeInfo?.title,
      "bookImg" : this.book?.volumeInfo?.imageLinks?.thumbnail
    };
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.dialogValue = result.data;
    });
  }
}
