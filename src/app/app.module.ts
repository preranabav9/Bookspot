import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookComponent } from './view-book/view-book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecommendationComponent } from './recommendation/recommendation.component'
import { RequestResetComponent } from './request-reset/request-reset.component';

import { RequestResponseComponent } from './request-response/request-response.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    RecommendationComponent,
    RegisterSuccessComponent,
    DashboardComponent,
    ViewBookComponent,
    HeaderComponent,
    FooterComponent,
    ReviewDialogComponent,
    SearchBookComponent,
    RecommendationComponent,
    RequestResetComponent,
    RequestResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
