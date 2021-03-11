import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {
  dialogData: any = {};
  currentRate = 0;
  constructor(public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dialogData = data;
    }

  ngOnInit(): void {
    console.log("dialogData", this.dialogData);
  }
}
