import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from '../services/review-service.service';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {
  dialogData: any = {};
  reviews: any;
  constructor(public dialogRef: MatDialogRef<ViewReviewsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private reviewService: ReviewService) { 
      this.dialogData = data;
    }

  ngOnInit(): void {
    console.log("dialogData", this.dialogData);
    this.getReviewsByBookId();
  }
  getReviewsByBookId() {
    this.reviewService.getReviewsByBookISBN(this.dialogData.bookISBN).subscribe(
      response => {
        this.reviews = response;
      }
    )
  }
}
