import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterComponent } from '../register/register.component';
import { RequestResetComponent } from '../request-reset/request-reset.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
            private userService: UserService,
            private router: Router,
            private toastr: ToastrService,
            public dialog: MatDialog) { }

  ngOnInit() {
      this.loginForm= this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      }, );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.router.navigate(['dashboard']);
    this.userService.login(this.loginForm.value).subscribe(
      response => {
        if(response['id']) {
          localStorage.setItem('userId', response['id']);
          localStorage.setItem('userName', response['firstName'] + " " +response['lastName']);
          localStorage.setItem('role', response['role']);
          localStorage.setItem('token', response['token']);
          this.dialog.closeAll();
          window.location.reload();
          this.toastr.success("Login Successful", "Welcome back!");
        } else {
          this.toastr.success("Please try again", "Invalid Credential!!!");
        }
      },
      error => {
        this.toastr.error("Please try again", "Invalid Credential!!!");
      }
    );
    this.submitted = true;
  }
  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
    });
  }
  openResetPasswordDialog() {
    let dialogRef = this.dialog.open(RequestResetComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
    });
  }
}


