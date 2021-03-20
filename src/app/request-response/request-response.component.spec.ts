import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MustMatch } from '../helpers/must-match.validator';
import { UserService } from '../services/user.service';
import { RequestResponseComponent } from './request-response.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

describe('RequestResponseComponent', () => {
  let component: RequestResponseComponent;
  let fixture: ComponentFixture<RequestResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResponseComponent ],
      imports:[
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
       
        

      ],
      providers:[UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should set submitted true',(()=>{
    component.responseForm;
    expect(component.responseForm).toBeTruthy();
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
