import { ComponentFixture, TestBed } from '@angular/core/testing';
import { coerceArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { RecommendationComponent } from './recommendation.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
describe('RecommendationComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
  
    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
   expect(element).toBeTruthy();
   });

 
});
