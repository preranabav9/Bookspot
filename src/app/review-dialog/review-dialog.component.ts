import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
    private reviewService: ReviewService,
    private toastr: ToastrService) { 
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
        this.toastr.success("Review Added", "");
        this.dialogRef.close();
      },
      error => {
        this.toastr.error("Server Error", "Failed to load resources");
        console.log(error);
      }
    )
  }
}
