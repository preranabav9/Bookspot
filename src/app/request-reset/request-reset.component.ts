import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-request-reset',
  templateUrl:'./request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
resetForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
      this.resetForm= this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]]
        
         
      }, );
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  onSubmit() {
    console.log("value12",this.resetForm.get('email'));
   this.userService.forgetpassword(this.resetForm.value.email).subscribe(
       result => {
         console.log(result);
       }
     )
     

     this.submitted = true;

     // stop here if form is invalid
     if (this.resetForm.invalid) {
         return;
     }
 }
}

