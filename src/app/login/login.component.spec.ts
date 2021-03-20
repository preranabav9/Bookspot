import {  ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Component, OnInit, ɵExtraLocaleDataIndex } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RegisterComponent } from '../register/register.component';
import { RequestResetComponent } from '../request-reset/request-reset.component';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        MatDialogModule

      ],
      providers:[UserService,ToastrService]
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('should set submitted true',(()=>{
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
}));

it('call on submit',(()=>{

spyOn(component,'onSubmit') ;
 let e1=fixture.debugElement.query(By.css('.btn.login')).nativeElement;

e1.click();
fixture.detectChanges();
//tick();
expect(component.onSubmit).toHaveBeenCalled();

}));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 
