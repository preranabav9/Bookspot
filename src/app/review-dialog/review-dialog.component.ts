import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from '../services/review-service.service';
@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {
  dialogData: any = {};
  currentRate = 0;
  review: string = "";
  constructor(public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService) { 
      this.dialogData = data;
    }

  ngOnInit(): void {
  }
  addReview(){
    let data = {
      "userId": this.dialogData.userId,
      "userName": this.dialogData.userName,
      "bookISBN": this.dialogData.bookISBN,
      "rating": 4,
      "review": this.review
  };
    this.reviewService.addReview(data).subscribe(
      result => {
        this.dialogRef.close();
      },
      error => {
        console.log(error);
      }
    )
  }
}
