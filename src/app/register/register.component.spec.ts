import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/user.service';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        MatDialogModule,
        

      ],
      providers:[UserService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should set submitted true',(()=>{
    component.registerForm;
    expect(component.registerForm).toBeTruthy();
  }));

  it('call on submit',(()=>{

    spyOn(component,'onSubmit') ;
     let e1=fixture.debugElement.query(By.css('button')).nativeElement;
    
    e1.click();
    fixture.detectChanges();
    //tick();
    expect(component.onSubmit).toHaveBeenCalled();
    
    }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
