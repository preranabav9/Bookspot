import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestResetComponent } from './request-reset.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
describe('RequestResetComponent', () => {
  let component: RequestResetComponent;
  let fixture: ComponentFixture<RequestResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResetComponent ],
     imports:[
      FormsModule,
      ReactiveFormsModule,
      HttpClientTestingModule
      ],
      providers:[UserService]
    })
  
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should set submitted true',(()=>{
    component.resetForm;
    expect(component.resetForm).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
