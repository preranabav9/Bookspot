import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../services/book.service';
import { FavouriteBookComponent } from './favourite-book.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
describe('FavouriteBookComponent', () => {
  let component: FavouriteBookComponent;
  let fixture: ComponentFixture<FavouriteBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteBookComponent ],
      imports:[HttpClientTestingModule],
      providers:[BookService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
   expect(element).toBeTruthy();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
