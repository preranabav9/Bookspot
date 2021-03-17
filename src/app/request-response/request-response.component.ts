import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-request-response',
  templateUrl: './request-response.component.html',
  styleUrls: ['./request-response.component.css']
})
export class RequestResponseComponent implements OnInit {
  responseForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit() {
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
       console.log("value",this.responseForm.value);
      this.userService.responseForm(this.responseForm.value).subscribe(
          result => {
            console.log(result);
          }
        )

        this.submitted = true;

        // stop here if form is invalid
        if (this.responseForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.responseForm.value))
  }
}
