import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< src/app/app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======

>>>>>>> src/app/app.module.ts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
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
<<<<<<< src/app/app.module.ts
=======

>>>>>>> src/app/app.module.ts

<<<<<<< src/app/app.module.ts

=======
import { RequestResetComponent } from './request-reset/request-reset.component';

import { RequestResponseComponent } from './request-response/request-response.component';


>>>>>>> src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< src/app/app.module.ts
=======
    AboutUsComponent,
    RecommendationComponent,
    RegisterSuccessComponent,
    DashboardComponent,
    ViewBookComponent,
    HeaderComponent,
    FooterComponent,
    ReviewDialogComponent,
    SearchBookComponent,
    RecommendationComponent
>>>>>>> src/app/app.module.ts
<<<<<<< src/app/app.module.ts

=======
    RequestResetComponent,
    RequestResponseComponent
    
    
   
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
    FlexLayoutModule
<<<<<<< src/app/app.module.ts
=======
  
>>>>>>> src/app/app.module.ts
    FormsModule,
    ReactiveFormsModule,
    
<<<<<<< src/app/app.module.ts
=======
    
>>>>>>> src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
