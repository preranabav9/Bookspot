import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-request-response',
  templateUrl: './request-response.component.html',
  styleUrls: ['./request-response.component.css']
})
export class RequestResponseComponent implements OnInit {
  responseForm: FormGroup;
  submitted = false;
  userId: number = 0;
  constructor(private formBuilder: FormBuilder,
            private userService: UserService,
            private toastrService: ToastrService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    this.userId = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.responseForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.responseForm.controls; }

  onSubmit() {
    if (this.responseForm.invalid) {
      this.toastrService.error("Please enter details", "Invalid data");
      return;
    }
      this.userService.resetPassword(this.responseForm.value, this.userId).subscribe(
          result => {
            this.router.navigate(['dashboard']);
            this.toastrService.success("Please Login!!", "Password-reset successful!!!");
            console.log(result);
          }
        )
        this.submitted = true;
  }
}
