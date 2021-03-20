import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router,
                private toastr: ToastrService
                ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        if(this.registerForm.invalid) {
            this.toastr.error("Please fill all the details", "Invalid Data");
            return;
        }
        this.userService.register(this.registerForm.value).subscribe(
            result => {
                window.location.reload();
                this.toastr.success("Registration Successful", "Please login!!!");
                this.router.navigate(['register-success']); //if the activation is successful only then register-success.
            },
            error => {
                this.toastr.error("Server Error", "Failed to load resources");
            }
        );
        this.submitted = true;
    }
}
