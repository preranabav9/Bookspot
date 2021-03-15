import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
      this.loginForm= this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
         
      }, );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log("value12",this.loginForm.value);
   this.userService.login(this.loginForm.value).subscribe(
       result => {
         console.log(result);
       }
     )
     

     this.submitted = true;

     // stop here if form is invalid
     if (this.loginForm.invalid) {
         return;
     }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
 }
}

