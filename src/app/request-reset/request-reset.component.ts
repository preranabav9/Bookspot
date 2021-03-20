import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-reset',
  templateUrl:'./request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
resetForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,
            private userService: UserService,
            private toastrService: ToastrService,
            private router: Router) { }

  ngOnInit() {
      this.resetForm= this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]]
      }, );
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  onSubmit() {
    if (this.resetForm.invalid) {
      this.toastrService.error("Please enter email Id", "Invalid Details");
      return;
    }
    this.userService.forgetpassword(this.resetForm.value.email).subscribe(
      result => {
        this.router.navigate(['dashboard']);
        this.toastrService.success("Check you email", "Reset Initiated");
      }
    )
    this.submitted = true;
  }
}

