import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteBookComponent } from './favourite-book/favourite-book.component';
import { LoginComponent } from './login/login.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { RequestResponseComponent } from './request-response/request-response.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: 'full' },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "search",
    component: SearchBookComponent
  },
  {
    path: "request-response",
    component: RequestResponseComponent
  },
  {
    path:"about-us",
    component: AboutUsComponent
  },
  {
    path: "register-success",
    component: RegisterSuccessComponent
  },
  {
    path: "view-book",
    component: ViewBookComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "recommendation",
    component: RecommendationComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: "favourite-book",
    component: FavouriteBookComponent,
    canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }