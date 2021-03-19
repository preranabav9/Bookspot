import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
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
import{ Ng2OrderModule} from 'ng2-order-pipe'
import { RequestResponseComponent } from './request-response/request-response.component';
import { FavoriteBookComponent } from './favorite-book/favorite-book.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationService } from './services/authentication.service';
import { CanActivateGuard } from './can-activate.guard';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
<<<<<<< src/app/app.module.ts

=======
>>>>>>> src/app/app.module.ts


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
    RequestResponseComponent,
<<<<<<< src/app/app.module.ts
    FavoriteBookComponent,
    AdminComponent,
    ViewReviewsComponent
=======
>>>>>>> src/app/app.module.ts
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
    ReactiveFormsModule ,
    Ng2OrderModule,
    ToastrModule.forRoot()
  ],
  providers: [CanActivateGuard,
            AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
